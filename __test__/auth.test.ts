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
  successStdLogin,
  successTechLogin,
  invalidUserPassword,
  incorrectEmail,
  incorrectPassword,
} from '../server/utils';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

describe('POST /api/v1/auth/signup', () => {
  it('should return 201 Created, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(successSignup)
      .expect(201);

    expect(res.body.message).toBe('User Created Successfully');
  });

  it('should return 409 Conflict, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(takenEmail)
      .expect(409);

    expect(res.body.message).toBe('The email you used is taken');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(invalidPassword)
      .expect(400);

    expect(res.body.message[0]).toBe('Password must be at least 6 characters long');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(invalidUsername)
      .expect(400);

    expect(res.body.message[0]).toBe('Username must be at least 3 characters long');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .post('/api/v1/auth/signup')
      .send(invalidAvatar)
      .expect(400);

    expect(res.body.message[0]).toBe('Your avatar should be an image url');
  });
});

describe('GET /api/v1/auth/logout', () => {
  it('should clear user cookies and end request', async () => {
    const { body } = await supertest(app)
      .get('/api/v1/auth/logout')
      .expect(200)
      .expect('set-cookie', 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');

    const actual = body.message;
    const expected = 'Logged Out Successfully';
    expect(actual).toEqual(expected);
  });
});

describe('GET /api/v1/auth/login', () => {
  it('should return 200 OK, and Content-Type /json/ for student', async () => {
    const res = await supertest(app)
      .get('/api/v1/auth/login')
      .send(successStdLogin)
      .expect(200);
    expect(res.body.message).toBe('User Logged Successfully');
  });

  it('should return 200 OK, and Content-Type /json/ for teacher', async () => {
    const res = await supertest(app)
      .get('/api/v1/auth/login')
      .send(successTechLogin)
      .expect(200);
    expect(res.body.message).toBe('User Logged Successfully');
  });

  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .get('/api/v1/auth/login')
      .send(incorrectEmail)
      .expect(401);

    expect(res.body.message).toBe('Your email is incorrect');
  });

  it('should return 401 Unauthorized, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .get('/api/v1/auth/login')
      .send(incorrectPassword)
      .expect(401);

    expect(res.body.message).toBe('Your password is incorrect');
  });

  it('should return 400 Bad Request, and Content-Type /json/', async () => {
    const res = await supertest(app)
      .get('/api/v1/auth/login')
      .send(invalidUserPassword)
      .expect(400);

    expect(res.body.message[0]).toBe('Password must be at least 6 characters long');
  });
});
