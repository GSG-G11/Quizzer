import supertest from 'supertest';
import app from '../server/app';

describe('GET api/v1/auth/logout', () => {
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
