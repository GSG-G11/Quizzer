interface IAccessUser {
    role: string;
    isLoginModalOpen: boolean
    setLoginModalOpen: (isLoginModalOpen: boolean) => void
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
