import supertest from 'supertest';
import app from '../server/app';

const baseURL = '/api/v1/student';

describe('/api/v1/student', () => {
  it('should return 200 and leaderboard data as json response', async () => {
    const { body } = await supertest(app)
      .get(`${baseURL}/leaderboard`)
      .expect(200)
      .expect('Content-Type', /json/);

    expect(body).toHaveLength(10);
  });
});
