import React from 'react';
import { IAccessUser } from './Interfaces';

function Signup({ role, isLoginModal, setLoginModal }: IAccessUser) {
  return (
    <>
      <div>
        Hello
        {role}
        Sign up now!
      </div>
      <button type="button" onClick={() => setLoginModal(true)}>Log in</button>
    </>
  );
}

export default Signup;
