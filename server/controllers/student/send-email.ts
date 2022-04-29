import { Response, NextFunction } from 'express';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import { UserAuth } from '../../interfaces';
import { getQuizDetailsQuery, getStudentEmailQuery } from '../../queries';
import { emailResponse } from '../../utils';

dotenv.config();
const { env: { APP_MAIL, MAIL_PASSWORD } } = process;

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const { user: { userId, username }, body: { quizId, score } } = req;

  try {
    const { rows: { 0: info } } = await getQuizDetailsQuery(quizId);
    const { rows: { 0: emailObj } } = await getStudentEmailQuery(userId);
    const quizDetails = { ...info, student_name: username, student_score: score };
    const { email: userEmail } = emailObj;

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: APP_MAIL,
        pass: MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: APP_MAIL,
      to: userEmail,
      subject: `${quizDetails.quiz_title} Test Result`,
      html: emailResponse(quizDetails),
    });

    res.json({ message: 'Score added to database and an email was sent to the student Successfully' });
  } catch (err) {
    next(err);
  }
};
