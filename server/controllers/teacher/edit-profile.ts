import { NextFunction, Response } from 'express';
import { editTeacherProfile } from '../../queries';
import { CustomError } from '../../errors';
import { UserAuth } from '../../interfaces';
import { editProfileSchema } from '../../validation';
import { signToken } from '../../utils';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const {
    user: { userId: teacherId, role },
  } = req;

  try {
    const {
      username, bio, avatar,
    } = await editProfileSchema.validate(req.body);

    const { rows: { 0: { is_verified: isVerified } } } = await editTeacherProfile({
      username, bio, avatar, teacherId,
    });

    const userInfo = {
      userId: teacherId, username, role, bio, avatar, isVerified,
    };

    const token = await signToken(userInfo);

    res
      .cookie('token', token, { maxAge: 2592000000 })
      .json({ message: 'User profile edited successfully' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.errors, 400)) : next(err);
  }
};
