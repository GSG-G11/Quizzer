interface IUser {
  role: 'teacher' | 'student';
  userId: number;
  username: string;
  bio: string
  avatar: string
}

interface IUserInfo {
  username?: string;
  email: string;
  bio?: string;
  password: string;
  role: 'teacher' | 'student';
  avatar?: string;
}

interface IAuthContext {
  user: IUser | null;
  authModalType: 'role' | 'login_signup' | null;
  setAuthModalType: (_: 'role' | 'login_signup' | null) => void;
  signup: (_: IUserInfo) => void;
  login: (_: IUserInfo) => void;
  logout: () => void;
  setErrors: (_: string[]) => void;
  errors: string[];
  getUser: () => void
}

export { IUser, IUserInfo, IAuthContext };
