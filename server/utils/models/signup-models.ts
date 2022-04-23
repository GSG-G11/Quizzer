const successSignup = {
  username: 'Ali',
  password: 'ali123',
  email: 'zoher@gmail.com',
  bio: "it's me",
  role: 'student',
  avatar: 'https://github.com/zoher.png',
};

const takenEmail = {
  username: 'Ali',
  password: 'ali123',
  email: 'zaherabuamro@gmail.com',
  bio: "it's me",
  role: 'student',
  avatar: 'https://github.com/zaher.png',
};

const invalidPassword = {
  username: 'Ali',
  password: 'uru',
  email: 'zaherabuamro@gmail.com',
  bio: "it's me",
  role: 'student',
  avatar: 'https://github.com/zaher.png',
};

const invalidUsername = {
  username: 'f',
  password: 'jfjfjiowefj',
  email: 'zaherabuamro@gmail.com',
  bio: "it's me",
  role: 'student',
  avatar: 'https://github.com/zaher.png',
};

const invalidAvatar = {
  username: 'Ali',
  password: 'ali123',
  email: 'zoher@gmail.com',
  bio: "it's me",
  role: 'student',
  avatar: 'hello, world',
};

export {
  successSignup, takenEmail, invalidPassword, invalidUsername, invalidAvatar,
};
