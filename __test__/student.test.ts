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

  it('should add user private quiz score to the database and send the user an email', async () => {
    const res = await supertest(app)
      .post('/api/v1/student/score')
      .set({ Cookie: 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoiT3NhbWEiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY1MDcxMDk1OH0.2KxzAcIps31CFgxEe29FSr4oAei3DuLm-WKA7aTjECA' })
      .send({ quizId: 'quiz-1', score: 10 })
      .expect(200)
      .expect('Content-Type', /json/);

    expect(res.body.message).toBe('Email Sent Successfully');
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
