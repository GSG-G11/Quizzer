/* eslint-disable max-len */
import React, {
  Dispatch, SetStateAction, useState, MouseEvent,
} from 'react';
import {
  Avatar, Button, Divider, List, ListItemButton, ListItemIcon, Menu, MenuItem, Stack, Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const ActivateLink = ({ isActive } :{ isActive:boolean }) => (isActive ? { color: '#F9AA33' } : {});

interface INavbar {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  space?: number;
  avatarOrder?: number;
  setDrawer: Dispatch<SetStateAction<boolean>>;
}

const divider = <Divider orientation="horizontal" flexItem />;

function NavbarActions({
  direction, space, avatarOrder, setDrawer,
}:INavbar) {
  const auth = true;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleShowMenu = (e:MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <List sx={{ marginTop: '0.5rem' }}>
      <Stack direction={direction} spacing={space} alignItems="center" divider={divider}>

        {auth && (
        <>
          <ListItemIcon
            sx={{
              minWidth: 'initial', marginInline: '1rem', order: avatarOrder, cursor: 'pointer',
            }}
            onClick={handleShowMenu}
          >
            <Avatar alt="profile-picture" sx={{ color: 'secondary.light', backgroundColor: 'primary.main' }} />
          </ListItemIcon>

          <Menu open={!!anchorEl} anchorEl={anchorEl} transformOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={handleClose}>
            <Stack divider={divider} width="10rem">
              <Typography variant="overline" color="GrayText" textAlign="center" component="span">
                Signed in as
                <Typography color="initial" variant="subtitle2" mb=".5rem">Amjad</Typography>
              </Typography>

              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>logout</MenuItem>
            </Stack>
          </Menu>

        </>
        )}

        <ListItemButton onClick={() => setDrawer(false)} className={classes.navLink}>
          <NavLink to="/public" style={ActivateLink}>Public Quizzes</NavLink>
        </ListItemButton>

        <ListItemButton onClick={() => setDrawer(false)} className={classes.navLink}>
          <NavLink to="/leaderboard" style={ActivateLink}>Leaderboard</NavLink>
        </ListItemButton>

        <ListItemButton onClick={() => setDrawer(false)}>
          <Button variant="outlined" color="secondary" sx={{ color: 'primary.main' }}>Enter Code</Button>
        </ListItemButton>

        {!auth && (
        <ListItemButton onClick={() => setDrawer(false)}>
          <Button variant="contained" sx={{ color: 'secondary.light' }}>Log In</Button>
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
