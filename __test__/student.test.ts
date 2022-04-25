import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

describe('POST /api/v1/student/score', () => {
  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/student/score')
      .set({ Cookie: 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiWmFoZXIiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY1MDcxMDU5NX0.EVMLoTfhyGBxJJNSf6tqLRwC36lApGpgDfjBbbInpHk' })
      .send({ quizId: 'quiz-1', score: 10 })
      .expect(401)
      .expect('Content-Type', /json/);

    expect(res.body.message).toBe('Student can\'t attend a quiz more than once');
  });

  it('should return 401 Unauthorized and, Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/student/score')
      .set({ Cookie: 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWhtYWQiLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY1MDcxMTg4Mn0.JY4MEH0aVQw2-JDD8mcoFD7TQHLTPIvixzMmYeTQpdc' })
      .send({ quizId: 'quiz-1', score: 10 })
      .expect(401)
      .expect('Content-Type', /json/);

    expect(res.body.message).toBe('Unauthorized');
  });
});

const baseURL = '/api/v1/student';

describe('/api/v1/student/quiz/:quizId', () => {
  it('should return 200 and quiz data as json response', async () => {
    const { body: { data } } = await supertest(app)
      .get(`${baseURL}/quiz/quiz-1`)
      .expect(200)
      .expect('Content-Type', /json/);

    const actual = data;
    const expected = {
      description: 'This is quiz 1',
      id: 'quiz-1',
      mark: 10,
      teacher_id: 1,
      time: 5,
      title: 'Quiz 1',
      teacher_name: 'Ahmed',
    };

    expect(actual).toEqual(expected);
  });

  it('should return 404 and json response', async () => {
    const { body: { message } } = await supertest(app)
      .get(`${baseURL}/quiz/invalidQuizId`)
      .expect(404)
      .expect('Content-Type', /json/);

    const actual = message;
    const expected = 'No quiz found';

    expect(actual).toEqual(expected);
  });
});
