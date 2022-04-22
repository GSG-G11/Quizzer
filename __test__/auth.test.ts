import request from 'supertest';
import app from '../server/app';

describe('/auth/logout', () => {
  it('should clear user cookies and end request', async () => {
    await request(app).get('/api/v1/auth/logout')
      .expect(200)
      .expect('set-cookie', 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
  });
});
