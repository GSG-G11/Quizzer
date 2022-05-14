import React, { useState } from 'react';
import { Dialog } from '../../mui';
import { useAuth } from '../../Hooks';
import Login from './Login';
import Signup from './Signup';
import { IAccessUser } from './Interfaces';

function AccessUser({ role, isLoginModal, setLoginModal }: IAccessUser) {
  const { authModalType, setAuthModalType } = useAuth();

  return (
    <Dialog open={authModalType === 'login_signup'} onClose={() => { setAuthModalType(null); setLoginModal(true); }}>
      {isLoginModal && (
      <Login
        isLoginModal={isLoginModal}
        setLoginModal={setLoginModal}
        role={role}
      />
      )}
      {!isLoginModal && (
      <Signup
        isLoginModal={isLoginModal}
        setLoginModal={setLoginModal}
        role={role}
      />
      )}
    </Dialog>
  );
}

export default AccessUser;
