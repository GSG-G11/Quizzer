import React, {
  Dispatch, SetStateAction, useState, MouseEvent,
} from 'react';
import {
  Avatar, Button, Divider, List, ListItemButton, ListItemIcon, Menu, MenuItem, Stack, Typography,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useAuth } from '../../context/auth.jsx';
import { properCase } from '../../utils';

const activeStyles = ({ isActive } :{ isActive:boolean }) => (isActive ? { color: '#F9AA33' } : {});

interface INavbarActions {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  space?: number;
  avatarOrder?: number;
  setDrawer: Dispatch<SetStateAction<boolean>>;
  setCodeForm: Dispatch<SetStateAction<boolean>>;
}

const divider = <Divider orientation="horizontal" flexItem />;

function NavbarActions({
  direction, space, avatarOrder, setDrawer, setCodeForm,
}:INavbarActions) {
  const { user, signIn, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const { role, userId, username } = user || {};

  const showMenu = (e:MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const hideMenu = () => setAnchorEl(null);
  const hideDrawerAndMenu = () => {
    hideMenu();
    setDrawer(false);
  };

  return (
    <List sx={{ marginTop: '0.5rem' }}>
      <Stack direction={direction} spacing={space} alignItems="center" divider={divider}>

        {userId && (
        <>
          <ListItemIcon
            className={classes.avatarContainer}
            sx={{ order: avatarOrder }}
            onClick={showMenu}
          >
            <Avatar alt="profile-picture" sx={{ color: 'secondary.light', backgroundColor: 'primary.main' }} />
          </ListItemIcon>

          <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} transformOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={hideMenu}>
            <Stack divider={divider} width="10rem">
              <Typography variant="overline" color="GrayText" textAlign="center" component="span">
                Signed in as
                <Typography color="initial" variant="subtitle2" mb="0.5rem">{properCase(username)}</Typography>
              </Typography>

              {role === 'teacher' && <MenuItem onClick={() => { hideDrawerAndMenu(); navigate('profile'); }}>Profile</MenuItem>}
              <MenuItem
                onClick={() => { hideDrawerAndMenu(); logout(); }}
              >
                Logout

              </MenuItem>
            </Stack>
          </Menu>

        </>
        )}

        {(!userId || role === 'student') && (
        <>
          <ListItemButton onClick={() => setDrawer(false)}>
            <NavLink className={classes.navLink} to="public-quizzes" style={activeStyles}>Public Quizzes</NavLink>
          </ListItemButton>

          <ListItemButton onClick={() => setDrawer(false)}>
            <NavLink className={classes.navLink} to="leaderboard" style={activeStyles}>Leaderboard</NavLink>
          </ListItemButton>

          <ListItemButton onClick={() => { setDrawer(false); setCodeForm(true); }}>
            <Button variant="outlined" color="secondary" sx={{ color: 'primary.main' }}>Enter Code</Button>
          </ListItemButton>
        </>
        )}

        {userId && role === 'teacher' && (
        <ListItemButton onClick={() => setDrawer(false)}>
          <NavLink className={classes.navLink} to="my-quizzes" style={activeStyles}>My Quizzes</NavLink>
        </ListItemButton>
        )}

        {!userId && (
        <ListItemButton>
          <Button onClick={signIn} variant="contained" sx={{ color: 'secondary.light' }}>Log In</Button>
        </ListItemButton>
        )}
      </Stack>
    </List>
  );
}

NavbarActions.defaultProps = {
  direction: 'row',
  space: 0,
  avatarOrder: 1,
};

export default NavbarActions;
