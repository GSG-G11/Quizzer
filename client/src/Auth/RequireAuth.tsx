/* eslint-disable no-undef */
import React from 'react';
import { useAuth } from '../Hooks';

function RequireAuth({ element, userRole }: { element: JSX.Element, userRole: 'student' | 'teacher' }) {
  const { user, setAuthModalOpen } = useAuth();

  if (!user || user.role !== userRole) {
    setAuthModalOpen(true);
  }

  return element;
}

export default RequireAuth;
