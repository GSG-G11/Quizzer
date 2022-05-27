import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Divider, Menu, MenuItem, Typography, Stack,
} from '@mui/material';
import { properCase } from '../../Utils';
import { useAuth } from '../../Hooks';
import { IMenuList } from './Interfaces';

function MenuList({ setDrawer, toggleMenu, anchorEl }: IMenuList) {
  const { user, logout } = useAuth();
  const { username = '', role } = user || {};
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const hideDrawerAndMenu = () => {
    toggleMenu(undefined);
    setDrawer(false);
  };

  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} transformOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={() => toggleMenu(undefined)}>
      <Stack divider={<Divider orientation="horizontal" flexItem />} width="10rem">
        <Typography variant="overline" color="GrayText" textAlign="center" component="span">
          Signed in as
          <Typography color="initial" variant="subtitle2" mb="0.5rem">{properCase(username)}</Typography>
        </Typography>

        <MenuItem onClick={() => { hideDrawerAndMenu(); navigate(`/${role}/profile`); }}>Profile</MenuItem>
        {pathname !== '/student/quiz/enroll' && pathname !== '/teacher/quiz/new' && <MenuItem onClick={() => { hideDrawerAndMenu(); logout(); }}>Logout</MenuItem>}
      </Stack>
    </Menu>
  );
}

export default MenuList;
