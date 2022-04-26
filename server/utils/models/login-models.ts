const successStdLogin = {
  password: 'zaher123',
  email: 'zaherabuamro@gmail.com',
  role: 'student',
};

const successTechLogin = {
  password: 'ali123',
  email: 'ali@gmail.com',
  role: 'teacher',
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
  password: 'za',
  email: 'zaherabuamro@gmail.com',
  role: 'student',
};

export {
  successStdLogin, successTechLogin, incorrectEmail, incorrectPassword, invalidUserPassword,
};
