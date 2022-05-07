import { object, string } from 'yup';

export default object({
  email: string().email('Please Enter a valid email').required('Email is required'),
  password: string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
  role: string().oneOf(['student', 'teacher']).required('User role is required'),
});
