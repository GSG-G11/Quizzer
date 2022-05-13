/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Hooks';

function RequireAuth({ element, userRole }: { element: JSX.Element, userRole: 'student' | 'teacher' }) {
  const { user, setAuthModalOpen } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => { if (!user || user.role !== userRole) setAuthModalOpen(true); }, []);
  if (!user || user.role !== userRole) return <Navigate to="/" state={{ pathname }} />;

  return element;
}

export default RequireAuth;
