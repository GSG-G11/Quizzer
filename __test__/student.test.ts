import supertest from 'supertest';
import app from '../server/app';

const baseURL = '/api/v1/student';

describe('/api/v1/student', () => {
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
    const expected = 'No quiz found with that join code';

    expect(actual).toEqual(expected);
  });
});
