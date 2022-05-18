import React, { useState, useEffect } from 'react';
import classes from './AccessUser.module.css';
import { useAuth, useSnackBar } from '../../Hooks';
import { Form, Input, Submit } from '../FormUI';
import { IAccessUser, IUserInfo } from './Interfaces';
import { loginSchema } from '../../Validation';
import { signInWithPopup, GoogleAuthProvider, auth } from '../../Firebase/config';
import {
  Button,
  DialogTitle,
  DialogContent,
  Grid,
  DialogContentText,
  Typography,
  InputAdornment,
  EmailIcon,
  VisibilityIcon,
  GoogleIcon,
} from '../../mui';

function Login({ role: enteredRole, setLoginModalOpen }: IAccessUser) {
  const { showSnackBar } = useSnackBar();
  const { login, errors } = useAuth();

  useEffect(() => {
    if (errors.length) showSnackBar(errors[0], 'error');
  }, [errors]);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const { user }: any = result;
      const email = user.email as string;
      const password = user.accessToken as string;

      login({ email, password, role: enteredRole });
    } catch (err: any) {
      showSnackBar('Something went wrong while logging in with Google', 'error');
    }
  };

  const initialValues = { email: '', password: '', role: enteredRole };
  const loginSubmit = (userInfo: IUserInfo) => login(userInfo);

  return (
    <Form
      onSubmit={loginSubmit}
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
            <Button
              color="info"
              className={classes.googleEmail}
              variant="contained"
              startIcon={<GoogleIcon />}
              style={{ width: '100%' }}
              onClick={loginWithGoogle}
            >
              Continue with Google
            </Button>
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
          <Typography color="secondary" style={{ cursor: 'pointer' }} onClick={() => setLoginModalOpen(false)}>&nbsp;Sign up</Typography>
        </Grid>
      </DialogContent>
    </Form>
  );
}

export default Login;
