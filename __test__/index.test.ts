import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';

beforeAll(dbBuild);
afterAll(() => dbConnection.end());

describe('GET /', () => {
  it('should return 200 OK and Content-Type /json/', async () => {
    const res = await supertest(app)
      .get('/')
      .expect('Content-type', /json/)
      .expect(200);
    expect(res.body.message).toBe('Server Is Running');
  });
});
