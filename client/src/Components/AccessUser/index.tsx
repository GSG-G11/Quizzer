import React, { useState } from 'react';
import { Dialog } from '../../mui';
import { useAuth } from '../../Hooks';
import Login from './Login';
import Signup from './Signup';
import { IAccessUser } from './Interfaces';

function AccessUser({ role, isLoginModalOpen, setLoginModalOpen }: IAccessUser) {
  const { authModalType, setAuthModalType, setErrors } = useAuth();

  return (
    <Dialog open={authModalType === 'login_signup'} onClose={() => { setAuthModalType(null); setLoginModalOpen(true); setErrors([]); }}>
      {isLoginModalOpen ? (
        <Login
          isLoginModalOpen={isLoginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          role={role}
        />
      )
        : (
          <Signup
            isLoginModalOpen={isLoginModalOpen}
            setLoginModalOpen={setLoginModalOpen}
            role={role}
          />
        )}
    </Dialog>
  );
}

export default AccessUser;
