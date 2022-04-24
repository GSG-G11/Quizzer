import supertest from 'supertest';
import app from '../server/app';
import dbBuild from '../server/database/config/build';
import dbConnection from '../server/database/config/connections';

beforeEach(dbBuild);
afterAll(() => dbConnection.end());

const baseURL = '/api/v1/student';

describe('/api/v1/student/leaderboard', () => {
  it('should return 200 and leaderboard data as json response', async () => {
    const { body } = await supertest(app)
      .get(`${baseURL}/leaderboard`)
      .expect(200)
      .expect('Content-Type', /json/);

    expect(body).toHaveLength(10);
  });
});

describe('/api/v1/student/quiz/:quizId', () => {
  it('should return 200 and quiz data as json response', async () => {
    const { body: { data } } = await supertest(app)
      .get(`${baseURL}/quiz/quiz-1`)
      .expect(200)
      .expect('Content-Type', /json/);

    const actual = data;
    const expected = {
      description: 'This is quiz 1',
      id: 'quiz-1',
      quiz_mark: 10,
      teacher_id: 1,
      time: 5,
      title: 'Quiz 1',
      teacher_name: 'Ahmed',
    };

    expect(actual).toEqual(expected);
  });

  it('should return 404 and json response', async () => {
    const { body: { message } } = await supertest(app)
      .get(`${baseURL}/quiz/invalidQuizId`)
      .expect(404)
      .expect('Content-Type', /json/);

    const actual = message;
    const expected = 'No quiz found';

    expect(actual).toEqual(expected);
  });
});
