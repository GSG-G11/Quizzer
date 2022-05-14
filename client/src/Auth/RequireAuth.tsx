/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Hooks';

function RequireAuth({ element, userRole }: { element: JSX.Element, userRole: 'student' | 'teacher' }) {
  const { user, setAuthModalOpen } = useAuth();
  const { pathname } = useLocation();

  const isUserAuthorized = user && user.role === userRole;

  useEffect(() => { if (isUserAuthorized) setAuthModalOpen(true); }, []);
  if (!isUserAuthorized) return <Navigate to="/" state={{ pathname }} />;

  return element;
}

export default RequireAuth;
