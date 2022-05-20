import { object, string } from 'yup';

export default object({
  email: string().trim().email('Please Enter a valid email').required('Email is required'),
  password: string().trim().min(6, 'Password must be at least 6 characters long').required('Password is required'),
  role: string().trim().oneOf(['student', 'teacher']).required('User role is required'),
});
