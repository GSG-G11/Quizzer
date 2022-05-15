import React from 'react';
import {
  Button, DialogTitle, DialogContent, Grid, DialogContentText, Typography, InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth, useSnackBar } from '../../Hooks';
import classes from './AccessUser.module.css';
import { Form, Input, Submit } from '../FormUI';
import { IAccessUser, IUserInfo } from './Interfaces';
import { loginSchema } from '../../Validation';

function Login({ role: enteredRole, setLoginModal }: IAccessUser) {
  const { showSnackBar } = useSnackBar();
  const { login, setAuthModalType, errors } = useAuth();

  const initialValues = { email: '', password: '', role: enteredRole };

  const handleError = () => {
    showSnackBar(errors[0], 'error');
  };

  const loginSubmit = (userInfo: IUserInfo) => {
    login(userInfo);
    return setAuthModalType(null);
  };

  return (
    <Form
      onSubmit={errors.length ? handleError : loginSubmit}
      initialValues={initialValues}
      validationSchema={loginSchema}
    >
      <DialogTitle
        textAlign="center"
        padding="30px"
        fontWeight="600"
        fontSize="30px"
      >
        Log into Quizzer
      </DialogTitle>
      <DialogContent style={{ alignItems: 'center', textAlign: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button color="info" className={classes.googleEmail} variant="contained" startIcon={<GoogleIcon />} style={{ width: '100%' }}>Continue with Google</Button>
          </Grid>
          <Grid item xs={12}>
            <Input
              name="email"
              variant="outlined"
              placeholder="Enter your email"
              type="text"
              margin="dense"
              style={{ width: '100%', paddingTop: '20px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name="password"
              variant="outlined"
              placeholder="Enter your password"
              type="text"
              margin="dense"
              style={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs>
            <Submit color="primary" className={classes.accessSubmit} variant="contained" style={{ alignSelf: 'center' }}>Log in</Submit>
          </Grid>
        </Grid>
        <Grid container className={classes.access}>
          <DialogContentText paddingBottom="50x">
            Don’t have an account?
          </DialogContentText>
          <Typography color="secondary" style={{ cursor: 'pointer' }} onClick={() => setLoginModal(false)}>&nbsp;Sign up</Typography>
        </Grid>
      </DialogContent>
    </Form>
  );
}

export default Login;
