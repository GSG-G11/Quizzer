import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';
import {
  successSignup,
  takenEmail,
  invalidPassword,
  invalidUsername,
  invalidAvatar,
} from '../server/utils';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

describe('POST /api/v1/auth/signup', () => {
  it('should return 201 Created, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(successSignup);

    expect(res.status).toBe(201);
    expect(res.body.message).toBe('User Created Successfully');
  });

  it('should return 409 Conflict, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(takenEmail);

    expect(res.status).toBe(409);
    expect(res.body.message).toBe('The email you used is taken');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(invalidPassword);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Password must be at least 6 characters long');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(invalidUsername);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Username must be at least 3 characters long');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(invalidAvatar);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Your avatar should be an image url');
  });
});
