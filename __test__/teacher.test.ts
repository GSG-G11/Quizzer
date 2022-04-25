import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';
import { quiz } from '../server/utils';

const teacherToken = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiQWhtZWQiLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY1MDcyNzk4Mn0.-ZZUxOdb_HAXAK1WSEHBSge_04wf2Eo3lPHPOpG_wkI';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

describe('POST /api/v1/teacher/quiz', () => {
  it('should create a new quiz, return 201 OK, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .set({ Cookie: teacherToken })
      .send(quiz)
      .expect(201);

    expect(res.body.message).toBe('Quiz Created Successfully');
  });

  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/teacher/quiz')
      .send(quiz)
      .expect(401);

    expect(res.body.message).toBe('Unauthorized');
  });
});
