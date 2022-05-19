import React, { useEffect } from 'react';
import { useAuth, useSnackBar } from '../../Hooks';
import classes from './AccessUser.module.css';
import { Form, Input, Submit } from '../FormUI';
import { IUserInfo, IAccessUserProperties } from './Interfaces';
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
  VisibilityOffIcon,
} from '../../mui';

function Login({
  role: enteredRole,
  setLoginModalOpen,
  passwordsType,
  setPasswordsType,
}: IAccessUserProperties) {
  const { showSnackBar } = useSnackBar();
  const { login, setErrors, errors } = useAuth();

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
              label="Email"
              type="text"
              margin="dense"
              style={{ width: '100%', marginTop: '30px' }}
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
              label="Password"
              type={passwordsType ? 'password' : 'text'}
              margin="dense"
              style={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {
                    passwordsType ? (
                      <VisibilityOffIcon
                        onClick={() => { setPasswordsType(!passwordsType); }}
                        style={{ cursor: 'pointer' }}
                      />
                    )
                      : (
                        <VisibilityIcon
                          onClick={() => { setPasswordsType(!passwordsType); }}
                          style={{ cursor: 'pointer' }}
                        />
                      )
                    }
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
          <Typography color="secondary" style={{ cursor: 'pointer' }} onClick={() => { setLoginModalOpen(false); setErrors([]); }}>&nbsp;Sign up</Typography>
        </Grid>
      </DialogContent>
    </Form>
  );
}

export default Login;
