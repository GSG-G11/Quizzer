import { Dispatch, SetStateAction } from 'react';

interface IAccessUser {
    role: 'teacher' | 'student';
    isLoginModalOpen: boolean;
    setLoginModalOpen: (isLoginModalOpen: boolean) => void;
     setRole: Dispatch<SetStateAction<'student' | 'teacher'>>;
  }

  interface IAccessUserProperties {
    role: 'teacher' | 'student';
    isLoginModalOpen?: boolean;
    setLoginModalOpen: (isLoginModalOpen: boolean) => void;
    passwordsType?: boolean;
    setPasswordsType: (passwordsType: boolean) => void;
  }

  interface IUserInfo {
    email: string;
    password: string;
    role: 'student' | 'teacher';
    username?: string;
    bio?: string;
    avatar?: string;
  }

export { IAccessUser, IUserInfo, IAccessUserProperties };
