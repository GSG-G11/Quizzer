const successLogin = {
  password: 'zaher123',
  email: 'zaherabuamro@gmail.com',
  role: 'student',
};

const incorrectEmail = {
  password: 'zaher123',
  email: 'zaher@gmail.com',
  role: 'student',
};

const incorrectPassword = {
  password: 'zaher1231',
  email: 'zaherabuamro@gmail.com',
  role: 'student',
};

const invalidUserPassword = {
  password: 'uru',
  email: 'zaherabuamro@gmail.com',
  role: 'student',
};

export {
  successLogin, incorrectEmail, incorrectPassword, invalidUserPassword,
};
