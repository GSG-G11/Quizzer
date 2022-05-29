import React, { useState } from 'react';
import {
  Alert,
  AppBar, Box, Container, Drawer, IconButton, Toolbar, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BurgerIcon from '@mui/icons-material/Menu';
import NavbarActions from './NavbarActions';
import classes from './Navbar.module.css';
import { INavbar } from './Interfaces';
import { useAuth } from '../../Hooks';

function Navbar({ setCodeFormOpen, setRole }:INavbar) {
  const [drawerOpen, setDrawer] = useState<boolean>(false);
  const { role, isVerified } = useAuth().user || {};
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('md'));

  return (

    <>
      <AppBar className={classes.header}>
        <Container maxWidth="lg" disableGutters>

          <Toolbar>
            <Box flexGrow="1">
              <Typography variant="h4" className={classes.logo} onClick={() => navigate(role ? `${role}` : '/')}>Quizzer</Typography>
            </Box>

            {isSmallScreen && (
            <>
              <Drawer open={drawerOpen} onClose={() => setDrawer(false)} anchor="right">
                <NavbarActions setRole={setRole} setCodeForm={setCodeFormOpen} direction="column" space={2} avatarPosition={0} setDrawer={setDrawer} />
              </Drawer>

              <IconButton onClick={() => setDrawer(true)}>
                <BurgerIcon />
              </IconButton>
            </>
            )}

            {
            !isSmallScreen && (
            <NavbarActions
              setRole={setRole}
              setCodeForm={setCodeFormOpen}
              setDrawer={setDrawer}
            />
            )
            }
          </Toolbar>
        </Container>
      </AppBar>
      {Object.fromEntries(new URLSearchParams(document.cookie)).token && !isVerified && (
      <Alert severity="warning">
        Your account is NOT verified,
        Please check your email and click the link we sent to you to verify your account
      </Alert>
      )}
    </>
  );
}

export default Navbar;
