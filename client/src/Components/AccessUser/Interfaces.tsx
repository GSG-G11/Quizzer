interface IAccessUser {
    role: string;
    isLoginModal: boolean
    setLoginModal: (isLoginModal: boolean) => void
  }

  interface IUserInfo {
    email: string
    password: string
    role: 'student' | 'teacher';
    username?: string;
    bio?: string;
    avatar?: string;
  }

export { IAccessUser, IUserInfo };
