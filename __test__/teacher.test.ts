import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

describe('GET/ api/v1/teacher/enrolled-students/:quizId', () => {
  it('should get enrolled students for teacher quiz', async () => {
    const { body } = await supertest(app)
      .get('/api/v1/teacher/enrolled-students/quiz-1')
      .expect(200)
      .expect('Content-Type', /json/);

    const actual = Array.isArray(body);
    expect(actual).toBeTruthy();
  });
});
