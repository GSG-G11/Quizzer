import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IUser, IUserInfo, IAuthContext } from './interfaces';

export const AuthContext = createContext<IAuthContext>(null!);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isAuthModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const signup = async (userInfo: IUserInfo) => {
    try {
      const { data: { data: newUser } } = await axios.post('/api/v1/auth/signup', userInfo);
      setUser(newUser);
      navigate(`/${newUser.role}`);
    } catch (err: any) {
      const { message } = err.response.data;
      setErrors(message);
      if (err.response.status === 500) navigate('/error');
    }
  };

  const login = async (userInfo: IUserInfo) => {
    try {
      const { data: { data: loggedUser } } = await axios.post('/api/v1/auth/login', userInfo);
      setUser(loggedUser);
      navigate(`/${loggedUser.role}`);
    } catch (err: any) {
      const { message } = err.response.data;
      setErrors(message);
      if (err.response.status === 500) navigate('/error');
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/v1/auth/logout');
      setUser(null);
      navigate('/');
    } catch (err: any) {
      if (err.response.status === 500) navigate('/error');
    }
  };

  const getUser = async () => {
    try {
      const { data: { data: loggedUser } } = await axios.get('/api/v1/auth/is-auth');
      setUser(loggedUser);
      navigate(`/${loggedUser.role}`);
    } catch (err: any) {
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
      isAuthModalOpen,
      setAuthModalOpen,
      signup,
      login,
      logout,
    }),
    [user, isAuthModalOpen, errors],
  );

  return (
    <AuthContext.Provider value={memoizedUser}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;