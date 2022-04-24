interface User {
  destination?: 'students' | 'teachers',
  username?: string,
  email: string,
  password: string,
  bio?: string | null,
  avatar?: string | null,
}

export default User;
