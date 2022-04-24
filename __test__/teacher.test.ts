import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';
import { successReturnData, successTeacherProfile } from '../server/utils';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

const cookie = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNjUwNzg1Mzk3fQ.ErDrf4OSpcRWmrQACekbQBNwCRbBo1dmdBHRDio9b4w;';

describe('GET /api/v1/teacher/quizzes', () => {
  it('should return 200 and all quizzes teacher data as json response', async () => {
    const { body: { data } } = await supertest(app)
      .get('/api/v1/teacher/quizzes')
      .expect(200)
      .set({ Cookie: cookie })
      .expect('Content-Type', /json/);

    const actual = data;
    expect(actual).toEqual(successReturnData);
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

describe('GET /api/v1/teacher/profile', () => {
  it('should return 200 and all quizzes teacher data as json response', async () => {
    const { body: { data } } = await supertest(app)
      .get('/api/v1/teacher/profile')
      .expect(200)
      .set({ Cookie: cookie })
      .expect('Content-Type', /json/);

    const actual = data;
    expect(actual).toEqual(successTeacherProfile);
  });

  it('should return 401 Unauthorized and json response', async () => {
    const { body: { message } } = await supertest(app)
      .get('/api/v1/teacher/profile')
      .expect(401)
      .expect('Content-Type', /json/);

    const actual = message;
    const expected = 'Unauthorized';

    expect(actual).toEqual(expected);
  });
});
