import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';
import {
  validQuiz,
  noTitleQuiz,
  noDescriptionQuiz,
  noMarkQuiz,
  noTimeQuiz,
  noQuestionsQuiz,
  noQuestionQuiz,
  noQuestionAnswerTypeQuiz,
  invalidQuestionType,
  noAnswersQuestion,
  noAnswerQuestion,
} from '../server/utils';

const teacherToken = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiQWhtZWQiLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY1MDcyNzk4Mn0.-ZZUxOdb_HAXAK1WSEHBSge_04wf2Eo3lPHPOpG_wkI';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

describe('POST /api/v1/teacher/quiz', () => {
  it('should create a new quiz, return 201 OK, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(validQuiz)
      .expect(201);

    expect(res.body.message).toBe('Quiz Created Successfully');
  });

  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .send(validQuiz)
      .expect(401);

    expect(res.body.message).toBe('Unauthorized');
  });

  it('should create a new quiz, return 201 OK, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(validQuiz)
      .expect(201);

    expect(res.body.message).toBe('Quiz Created Successfully');
  });

  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noDescriptionQuiz)
      .expect(400);

    expect(res.body.message[0]).toBe('Quiz description is required');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noTitleQuiz)
      .expect(400);

    expect(res.body.message[0]).toBe('A quiz mush have a title');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noMarkQuiz)
      .expect(400);

    expect(res.body.message[0]).toBe('Quiz mark is required');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noTimeQuiz)
      .expect(400);

    expect(res.body.message[0]).toBe('Quiz duration must be specified');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noQuestionsQuiz)
      .expect(400);

    expect(res.body.message[0]).toBe('Questions can\'t be empty');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noQuestionQuiz)
      .expect(400);

    expect(res.body.message[0]).toBe('Question is not allowed to be empty');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noQuestionAnswerTypeQuiz)
      .expect(400);

    expect(res.body.message[0]).toBe('Question type must be specified');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noAnswersQuestion)
      .expect(400);

    expect(res.body.message[0]).toBe('Answers can\'t be empty');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noAnswerQuestion)
      .expect(400);

    expect(res.body.message[0]).toBe('Answer is not allowed to be empty');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(invalidQuestionType)
      .expect(400);

    expect(res.body.message[0]).toBe('Question type must be either MCQ, Short Answer, or True/False');
  });
});
