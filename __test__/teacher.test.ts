import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

describe('POST /api/v1/teacher/quiz', () => {
  it('should create a new quiz, return 200 OK, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiQWhtZWQiLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY1MDcyNzk4Mn0.-ZZUxOdb_HAXAK1WSEHBSge_04wf2Eo3lPHPOpG_wkI' })
      .send({
        quizId: 'id_one',
        title: 'my first quiz',
        description: 'my first quiz description',
        mark: 20,
        time: 30,
        questions: [
          {
            question: 'This is my question',
            type: 'mcq',
            answers: [{ answer: 'this is the answer', is_correct: true }],
          },
        ],
      })
      .expect(201);

    expect(res.body.message).toBe('Quiz Created Successfully');
  });

  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .send({
        quizId: 'id_one',
        title: 'my first quiz',
        description: 'my first quiz description',
        mark: 20,
        time: 30,
        questions: [
          {
            question: 'This is my question',
            type: 'mcq',
            answers: [{ answer: 'this is the answer', is_correct: true }],
          },
        ],
      })
      .expect(401);

    expect(res.body.message).toBe('Unauthorized');
  });
});
