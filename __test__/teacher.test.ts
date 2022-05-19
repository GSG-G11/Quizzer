import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/build';
import dbConnection from '../server/database/connections';
import {
  validQuiz,
  noOptions,
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
  invalidTrueFalseAnswers,
  successReturnData as quizzesData,
  teacherInfoSuccessEdited,
  teacherImageError,
  teacherNameError,
} from '../server/utils';

const teacherToken = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiQWhtZWQiLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY1MDcyNzk4Mn0.-ZZUxOdb_HAXAK1WSEHBSge_04wf2Eo3lPHPOpG_wkI';

beforeAll(dbBuild);
afterAll(() => dbConnection.end());

describe('GET/ api/v1/teacher/enrolled-students/:quizId', () => {
  it('should get enrolled students for teacher quiz when authorized', async () => {
    const {
      body: { data },
    } = await supertest(app)
      .get('/api/v1/teacher/quiz/quiz-1111111111111/enrolled-students')
      .set({ Cookie: teacherToken })
      .expect(200)
      .expect('Content-Type', /json/);

    const actual = data;

    const expected = [
      {
        username: 'Zaher',
        student_score: 10,
        mark: 10,
      },
      {
        username: 'Khaled',
        student_score: 10,
        mark: 10,
      },
      {
        username: 'Amjad',
        student_score: 9,
        mark: 10,
      },
    ];

    expect(actual).toEqual(expected);
  });

  it('should return 401 when unauthorized', async () => {
    await supertest(app)
      .get('/api/v1/teacher/quiz/quiz-1/enrolled-students')
      .expect(401)
      .expect('Content-Type', /json/);
  });
});

const cookie = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNjUwNzg1Mzk3fQ.ErDrf4OSpcRWmrQACekbQBNwCRbBo1dmdBHRDio9b4w;';
const userData = {
  username: 'Ali',
  bio: 'ali',
  avatar: 'https://res.cloudinary.com/dzqb0zjqw/image/upload/v1589735981/avatar_zqxqjy.jpg',
};

describe('GET /api/v1/teacher/profile', () => {
  it('should return 200 and all quizzes teacher data as json response', async () => {
    const { body: { data } } = await supertest(app)
      .get('/api/v1/teacher/profile')
      .expect(200)
      .set({ Cookie: cookie })
      .expect('Content-Type', /json/);

    expect(data).toEqual({ quizzesData, userData });
  });

  it('should return 401 Unauthorized and json response', async () => {
    const { body: { message } } = await supertest(app)
      .get('/api/v1/teacher/profile')
      .expect(401)
      .expect('Content-Type', /json/);

    expect(message).toEqual('Unauthorized');
  });
});

describe('GET /api/v1/teacher/quizzes', () => {
  it('should return 200 and all quizzes teacher data as json response', async () => {
    const { body: { data } } = await supertest(app)
      .get('/api/v1/teacher/quizzes')
      .expect(200)
      .set({ Cookie: cookie })
      .expect('Content-Type', /json/);

    expect(data).toEqual(quizzesData);
  });

  it('should return 401 Unauthorized and json response', async () => {
    const { body: { message } } = await supertest(app)
      .get('/api/v1/teacher/quizzes')
      .expect(401)
      .expect('Content-Type', /json/);

    const actual = message;
    const expected = 'Unauthorized';

    expect(actual).toEqual(expected);
  });
});

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

  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noDescriptionQuiz)
      .expect(400);

    expect(res.body.message[0]).toBe('Quiz description is required');
  });

  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noOptions)
      .expect(400);

    expect(res.body.message[0]).toBe('options are required');
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

    expect(res.body).toEqual({ message: ['options are required', 'Correct answer is required'] });
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(noAnswerQuestion)
      .expect(400);

    expect(res.body.message[0]).toBe('Correct answer is required');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(invalidQuestionType)
      .expect(400);

    expect(res.body.message[0]).toBe('Question type must be either MCQ, Short Answer, or True/False');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(invalidTrueFalseAnswers)
      .expect(400);

    expect(res.body).toEqual({ message: 'Invalid answers for question of type true_false' });
  });
});

describe('DELETE /api/v1/teacher/quiz/:quizId', () => {
  it('should return 200 and remove teacher quiz', async () => {
    const res = await supertest(app)
      .delete('/api/v1/teacher/quiz/quiz-1111111111111')
      .set({ Cookie: teacherToken })
      .expect(200);

    expect(res.body.message).toBe('Success delete');
  });

  it('Delete test quiz-1111111111111 for the second time to check if its still existing', async () => {
    const res = await supertest(app)
      .delete('/api/v1/teacher/quiz/quiz-1111111111111')
      .set({ Cookie: teacherToken })
      .expect(400);

    expect(res.body.message).toBe('No quiz to delete it');
  });

  it('should return 401 Unauthorized', async () => {
    const res = await supertest(app)
      .delete('/api/v1/teacher/quiz/quiz-2352323523512')
      .expect(401);

    expect(res.body.message).toBe('Unauthorized');
  });

  it('should return 400 and return massage for no data', async () => {
    const res = await supertest(app)
      .delete('/api/v1/teacher/quiz/quiz-2352323523512')
      .set({ Cookie: teacherToken })
      .expect(400);

    expect(res.body.message).toBe('No quiz to delete it');
  });

  it('should return 400 Bad Request and return massage for quizId validation', async () => {
    const res = await supertest(app)
      .delete('/api/v1/teacher/quiz/quiz-100')
      .set({ Cookie: teacherToken })
      .expect(400);

    expect(res.body.message[0]).toBe('Must be exactly 18 characters');
  });
});

describe('PATCH /api/v1/teacher/profile', () => {
  it('should return 200 and message successfully', async () => {
    const res = await supertest(app)
      .patch('/api/v1/teacher/profile')
      .set({ Cookie: teacherToken })
      .send(teacherInfoSuccessEdited)
      .expect(200);

    expect(res.body.message).toBe('User profile edited successfully');
  });

  it('should return 401 Unauthorized', async () => {
    const res = await supertest(app)
      .patch('/api/v1/teacher/profile')
      .expect(401);

    expect(res.body.message).toBe('Unauthorized');
  });

  it('should return 400 and for image', async () => {
    const res = await supertest(app)
      .patch('/api/v1/teacher/profile')
      .set({ Cookie: teacherToken })
      .send(teacherImageError)
      .expect(400);

    expect(res.body.message[0]).toBe('Your avatar should be an image url');
  });

  it('should return 400 and return massage for username', async () => {
    const res = await supertest(app)
      .patch('/api/v1/teacher/profile')
      .set({ Cookie: teacherToken })
      .send(teacherNameError)
      .expect(400);

    expect(res.body.message[0]).toBe('Username must be at least 3 characters long');
  });
});
