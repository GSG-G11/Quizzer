/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import spinner from '../../Assets/spinner.gif';
import classes from './AccessUser.module.css';
import { useAuth, useSnackBar } from '../../Hooks';
import { Form, Input, Submit } from '../FormUI';
import { IAccessUserProperties, IUserInfo } from './Interfaces';
import { signupSchema } from '../../Validation';
import { signInWithPopup, GoogleAuthProvider, auth } from '../../Firebase/config';
import {
  Button,
  DialogTitle,
  DialogContent,
  Grid,
  DialogContentText,
  Typography,
  InputAdornment,
  Divider,
  Avatar,
  EmailIcon,
  VisibilityIcon,
  GoogleIcon,
  PersonIcon,
  VisibilityOffIcon,
} from '../../mui';

function Signup({
  role: enteredRole, setLoginModalOpen, passwordsType, setPasswordsType,
}: IAccessUserProperties) {
  const { showSnackBar } = useSnackBar();
  const { signup, setErrors, errors } = useAuth();
  const [image, setImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (errors.length) showSnackBar(errors[0], 'error');
  }, [errors]);

  const signupWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const { user }: any = result;
      const email = user.email as string;
      const password = user.accessToken as string;
      const avatar = user.photoURL as string;
      const username = user.displayName as string;

      signup({
        username, email, password, avatar, role: enteredRole, bio: '',
      });
    } catch (err: any) {
      showSnackBar('Something went wrong while connecting with Google', 'error');
    }
  };

  const initialValues = {
    email: '', password: '', passwordConfirmation: '', role: enteredRole, username: '', bio: '', avatar: '',
  };

  const uploadImage = async (e: any) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET as string);
    setLoading(true);

    try {
      const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
      setImage(data.secure_url);
      setLoading(false);
    } catch (err: any) {
      showSnackBar('Something went wrong while uploading image', 'error');
    }
  };

  const signupSubmit = (userInfo: IUserInfo) => {
    const newUser = { ...userInfo, avatar: image };
    signup(newUser);
  };

  return (
    <Form
      onSubmit={signupSubmit}
      initialValues={initialValues}
      validationSchema={signupSchema}
    >
      <DialogTitle
        textAlign="center"
        padding="30px"
        fontWeight="600"
        fontSize="30px"
      >
        Sign up to Quizzer
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
              onClick={signupWithGoogle}
            >
              Continue with Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Input
              name="username"
              variant="outlined"
              placeholder="Enter your name"
              label="Full Name"
              type="text"
              margin="dense"
              style={{ width: '100%', marginTop: '30px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name="email"
              variant="outlined"
              placeholder="Enter your email"
              label="Email"
              type="text"
              margin="dense"
              style={{ width: '100%' }}
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
          <Grid item xs={12}>
            <Input
              name="passwordConfirmation"
              variant="outlined"
              placeholder="Confirm password"
              label="Password Confirm"
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
          <Grid item xs={12}>

            <Divider style={{ color: '#777' }}>Options</Divider>
          </Grid>
          <Grid item sm={9} xs={12}>
            <Input
              name="bio"
              variant="outlined"
              label="Write your bio here"
              fullWidth
              multiline
              rows={5}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <label className={classes.uploadImgLabel}>
              <Avatar
                src={loading ? spinner : image}
                sx={{ alignSelf: 'center' }}
                className={classes.avatar}
                alt="profile-picture"
              />

              Upload Image
              <Input
                name="avatar"
                variant="outlined"
                placeholder="Add your Avatar"
                type="file"
                className={classes.uploadImgInput}
                onChange={uploadImage}
              />
            </label>
          </Grid>

          <Grid item xs={12}>
            <Submit color="primary" className={classes.accessSubmit} variant="contained" style={{ alignSelf: 'center' }}>sign up</Submit>
          </Grid>
        </Grid>
        <Grid container className={classes.access}>
          <DialogContentText paddingBottom="50x">
            Already have an account?
          </DialogContentText>
          <Typography color="secondary" style={{ cursor: 'pointer' }} onClick={() => { setLoginModalOpen(true); setErrors([]); }}>&nbsp;log in</Typography>
        </Grid>
      </DialogContent>
    </Form>
  );
}

export default Signup;
