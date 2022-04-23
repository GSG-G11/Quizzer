import { Response, NextFunction } from 'express';
import { UserAuth } from '../../interfaces';
import { createQuizQuery, createQuestionQuery } from '../../database/queries';

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const {
    user: { userId: teacherId }, body: {
      quizId, title, description, mark, time, questions,
    },
  } = req;

  try {
    const { rows: { 0: quiz } } = await createQuizQuery({
      quizId, teacherId, title, description, mark, time,
    });
    const { id } = quiz;

    const promises = questions.map(({ question, type, answers }) => {
      const stringifiedAnswers = JSON.stringify(answers);
      return createQuestionQuery({
        quizId: id, question, type, answers: stringifiedAnswers,
      });
    });

    const allQuestions = (await (Promise.all(promises))).map((question) => question.rows[0]);

    res
      .status(201)
      .json({
        data: {
          quiz,
          answers: allQuestions,
        },
        message: 'Quiz Created Successfully',
      });
  } catch (err) {
    next(err);
  }
};
