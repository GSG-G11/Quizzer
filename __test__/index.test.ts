import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

describe('GET /', () => {
  it('should return 200 OK and Content-Type /json/', async () => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });
});
