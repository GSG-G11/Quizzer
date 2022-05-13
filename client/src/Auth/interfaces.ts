interface IUser {
  role: 'teacher' | 'student';
  userId: number;
  username: string;
}

interface IUserInfo {
  username?: string;
  email?: string;
  bio?: string;
  password: string;
  role: 'teacher' | 'student';
  avatar?: string;
}

interface IAuthContext {
  user: IUser | null;
  isAuthModalOpen: boolean;
  setAuthModalOpen: (_: boolean) => void;
  signup: (_: IUserInfo) => void;
  login: (_: IUserInfo) => void;
  logout: () => void;
}

export { IUser, IUserInfo, IAuthContext };
