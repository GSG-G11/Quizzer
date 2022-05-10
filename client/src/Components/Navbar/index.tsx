import React, { useState } from 'react';
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar, Typography, useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BurgerIcon from '@mui/icons-material/Menu';
import NavbarActions from './NavbarActions';

function Navbar() {
  const [drawerOpen, setDrawer] = useState<boolean>(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (

    <AppBar sx={{ backgroundColor: 'white' }} position="static">
      <Toolbar>
        <Typography onClick={() => navigate('/')} variant="h4" flexGrow={1} color="primary">Quizzer</Typography>

        {isSmallScreen && (
          <>
            <Drawer open={drawerOpen} onClose={() => setDrawer(false)} anchor="right">
              <NavbarActions direction="column" space={1} avatarOrder={0} setDrawer={setDrawer} />
            </Drawer>

            <IconButton onClick={() => setDrawer(true)}>
              <BurgerIcon />
            </IconButton>
          </>
        )}

        {!isSmallScreen && <NavbarActions setDrawer={setDrawer} />}

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;
