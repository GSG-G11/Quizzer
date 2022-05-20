import { object, string } from 'yup';

export default object({
  username: string().trim().min(3, 'Username must be at least 3 characters long').max(50, 'Maximum username is 50 characters long')
    .required('Your username is required'),
  bio: string().trim(),
  avatar: string().trim().url('Your avatar should be an image url'),
});
