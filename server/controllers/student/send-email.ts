import { Response, NextFunction } from 'express';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import { UserAuth } from '../../interfaces';
import { getQuizDetailsQuery, getStudentEmailQuery } from '../../database/queries';
import { emailResponse } from '../../utils';

dotenv.config();

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const { user: { userId, username }, body: { quizId, score } } = req;

  try {
    const { rows: { 0: info } } = await getQuizDetailsQuery(quizId);
    const { rows: { 0: emailObj } } = await getStudentEmailQuery(userId);
    const quizDetails = { ...info, student_name: username, student_score: score };
    const { email: userEmail } = emailObj;

    const transporter = createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'eli.hauck97@ethereal.email',
        pass: 'dHCE5sk9jN62Vsh4pg',
      },
    });

    await transporter.sendMail({
      from: 'quizzer.gsg@gmail.com',
      to: userEmail,
      subject: `${quizDetails.quiz_title} Test Result`,
      html: emailResponse(quizDetails),
    });

    res.json({ message: 'Email Sent Successfully' });
  } catch (err) {
    next(err);
  }
};
