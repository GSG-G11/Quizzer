import { Response, NextFunction } from 'express';
import { nanoid } from 'nanoid';
import { UserAuth } from '../../interfaces';
import { addQuizSchema } from '../../validation';
import { CustomError } from '../../errors';
import { createQuizQuery, createQuestionQuery } from '../../queries';

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const {
    user: { userId: teacherId }, body: {
      title, description, mark, time, questions,
    },
  } = req;

  const quizId = nanoid(18);

  try {
    await addQuizSchema.validate(req.body, { abortEarly: false });

    questions.forEach(({ type, answers: { answer, options } }) => {
      if (type === 'mcq') {
        if (options.indexOf(answer) === -1) throw new CustomError('Correct answer should be in options', 400);
      } else if (type === 'true_false') {
        const notAllBooleans = options.some((option: boolean) => typeof option !== 'boolean');
        const sameOptions = options[0] === options[1];
        const validTrueFalseQuestion = typeof answer !== 'boolean' || options.length !== 2 || notAllBooleans || sameOptions;
        if (validTrueFalseQuestion) throw new CustomError('Invalid answers for question of type true_false', 400);
      }
    });

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
          questions: allQuestions,
        },
        message: 'Quiz Created Successfully',
      });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.errors, 400)) : next(err);
  }
};
