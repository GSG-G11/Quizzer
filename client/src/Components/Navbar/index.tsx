import React, { useState } from 'react';
import {
  AppBar, Container, Drawer, IconButton, Toolbar, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BurgerIcon from '@mui/icons-material/Menu';
import NavbarActions from './NavbarActions';
import classes from './Navbar.module.css';
import { useAuth } from '../../Hooks';
import { INavbar } from './Interfaces';
import { IUser } from '../../Auth/interfaces';

function Navbar({ setCodeFormOpen }:INavbar) {
  const [drawerOpen, setDrawer] = useState<boolean>(false);
  const user = useAuth().user as IUser;
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('md'));

  return (

    <AppBar className={classes.header}>
      <Container maxWidth="lg" disableGutters>

        <Toolbar>
          <Typography variant="h4" className={classes.logo} onClick={() => navigate(user ? `/${user.role}` : '/')}>Quizzer</Typography>

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
      </Container>
    </AppBar>
  );
}

export default Navbar;
