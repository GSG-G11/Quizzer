import React, { useState } from 'react';
import {
  AppBar, Drawer, IconButton, Toolbar, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BurgerIcon from '@mui/icons-material/Menu';
import NavbarActions from './NavbarActions';
import classes from './Navbar.module.css';

import { INavbar } from './Interfaces';

function Navbar({ setCodeFormOpen }:INavbar) {
  const [drawerOpen, setDrawer] = useState<boolean>(false);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('md'));

  return (

    <AppBar className={classes.header}>
      <Toolbar>
        <Typography variant="h4" className={classes.logo} onClick={() => navigate('/')}>Quizzer</Typography>

        {isSmallScreen && (
          <>
            <Drawer open={drawerOpen} onClose={() => setDrawer(false)} anchor="right">
              <NavbarActions setCodeForm={setCodeFormOpen} direction="column" space={2} avatarPosition={0} setDrawer={setDrawer} />
            </Drawer>

            <IconButton onClick={() => setDrawer(true)}>
              <BurgerIcon />
            </IconButton>
          </>
        )}

        {!isSmallScreen && <NavbarActions setCodeForm={setCodeFormOpen} setDrawer={setDrawer} />}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
