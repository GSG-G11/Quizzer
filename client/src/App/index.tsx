/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react';
import {
  Button,
} from '@mui/material';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import { RoleModal } from '../Components';
import './index.css';

function App() {
  const [role, setRole] = useState<string>('student');
  const [modal, setModal] = useState<string>('');

  return (
    <>
      <RoleModal modal={modal} setModal={setModal} role={role} setRole={setRole} />
      <Button onClick={() => setModal('role')}>Click</Button>
    </>
  );
}

export default App;
