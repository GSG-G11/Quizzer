import React, { useState } from 'react';
import { Dialog } from '../../mui';
import { useAuth } from '../../Hooks';
import Login from './Login';
import Signup from './Signup';
import { IAccessUser } from './Interfaces';

function AccessUser({
  role, isLoginModalOpen, setLoginModalOpen, setRole,
}: IAccessUser) {
  const {
    authModalType, setAuthModalType, setErrors, setQuizAttemptedToEnroll,
  } = useAuth();
  const [passwordsType, setPasswordsType] = useState<boolean>(true);

  return (
    <Dialog open={authModalType === 'login_signup'} onClose={() => { setAuthModalType(null); setLoginModalOpen(true); setErrors([]); setQuizAttemptedToEnroll(''); setRole('student'); }}>
      {isLoginModalOpen ? (
        <Login
          isLoginModalOpen={isLoginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          role={role}
          passwordsType={passwordsType}
          setPasswordsType={setPasswordsType}
        />
      )
        : (
          <Signup
            isLoginModalOpen={isLoginModalOpen}
            setLoginModalOpen={setLoginModalOpen}
            role={role}
            passwordsType={passwordsType}
            setPasswordsType={setPasswordsType}

          />
        )}
    </Dialog>
  );
}

export default AccessUser;
