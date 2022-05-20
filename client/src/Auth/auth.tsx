/* eslint-disable no-unsafe-optional-chaining */
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import axios from 'axios';
import { useNavigate, useHref, useLocation } from 'react-router-dom';
import { IUser, IUserInfo, IAuthContext } from './interfaces';
import { useSnackBar } from '../Hooks';

export const AuthContext = createContext<IAuthContext>(null!);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [authModalType, setAuthModalType] = useState<'role' | 'login_signup' | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const href = useHref(location);
  const { showSnackBar } = useSnackBar();

  const signup = async (userInfo: IUserInfo) => {
    try {
      const { data: { data: newUser } } = await axios.post('/api/v1/auth/signup', userInfo);
      if (newUser.isVerified) setUser(newUser);
      setAuthModalType(null);
      showSnackBar('A Confirmation email was sent to you, verify your account to start using Quizzer', 'success');
      setErrors([]);
    } catch (err: any) {
      const { message } = err.response?.data;
      if (message) setErrors([message]);
      if (err.response.status === 500) navigate('/error');
    }
  };

  const login = async (userInfo: IUserInfo) => {
    try {
      const { data: { data: loggedUser } } = await axios.post('/api/v1/auth/login', userInfo);
      if (loggedUser.isVerified) {
        setUser(loggedUser);
        navigate(`${loggedUser.role}/`);
      }
      setAuthModalType(null);
      setErrors([]);
    } catch (err: any) {
      const { message } = err.response.data;
      setErrors([message]);
      if (err.response.status === 500) navigate('/error');
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/v1/auth/logout');
      setUser(null);
      setAuthModalType(null);
      navigate('/');
    } catch (err: any) {
      if (err.response.status === 500) navigate('/error');
    }
  };

  const getUser = async () => {
    try {
      const { data: { data: loggedUser } } = await axios.get('/api/v1/auth/is-auth');
      if (loggedUser.isVerified) {
        setUser(loggedUser);
        navigate(href === '/' ? `${loggedUser.role}/` : href);
      }
    } catch (err: any) {
      setUser(null);
      if (err.response.status === 500) navigate('/error');
    }
  };

  useEffect(() => {
    try {
      getUser();
    } catch (err) {
      setUser(null);
    }
  }, []);

  const memoizedUser = useMemo(
    () => ({
      user,
      errors,
      authModalType,
      setErrors,
      setAuthModalType,
      signup,
      login,
      logout,
      getUser,
    }),
    [user, authModalType, errors],
  );

  return (
    <AuthContext.Provider value={memoizedUser}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
