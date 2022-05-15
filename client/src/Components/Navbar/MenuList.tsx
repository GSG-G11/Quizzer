import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Divider, Menu, MenuItem, Typography, Stack,
} from '@mui/material';
import { properCase } from '../../Utils';
import { useAuth } from '../../Hooks';
import { IMenuList } from './Interfaces';
import { IUser } from '../../Auth/interfaces';

function MenuList({ setDrawer, toggleMenu, anchorEl }:IMenuList) {
  const { user, logout } = useAuth();
  const { username = '', role } = user || {};

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

        {role === 'teacher' && <MenuItem onClick={() => { hideDrawerAndMenu(); navigate('/teacher/profile'); }}>Profile</MenuItem>}
        <MenuItem onClick={() => { hideDrawerAndMenu(); logout(); }}>Logout</MenuItem>
      </Stack>
    </Menu>
  );
}

export default MenuList;
