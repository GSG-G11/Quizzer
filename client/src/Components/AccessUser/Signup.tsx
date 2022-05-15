/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button, DialogTitle, DialogContent, Grid, DialogContentText,
  Typography, TextField, InputAdornment, Divider, Avatar,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth, useSnackBar } from '../../Hooks';
import classes from './AccessUser.module.css';
import { Form, Input, Submit } from '../FormUI';
import { IAccessUser, IUserInfo } from './Interfaces';
import { signupSchema } from '../../Validation';
import spinner from '../../Assets/spinner.gif';

function Signup({ role: enteredRole, setLoginModal }: IAccessUser) {
  const { showSnackBar } = useSnackBar();
  const { signup, setAuthModalType, errors } = useAuth();
  const [image, setImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = {
    email: '', password: '', passwordConfirmation: '', role: enteredRole, username: '', bio: '', avatar: '',
  };

  const uploadImage = async (e: any) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'uaoogcr3');
    setLoading(true);

    const { data } = await axios.post('https://api.cloudinary.com/v1_1/duhkssuw2/image/upload', formData);

    setImage(data.secure_url);
    setLoading(false);
  };

  const handleError = () => {
    showSnackBar(errors[0], 'error');
  };

  const signupSubmit = (userInfo: IUserInfo) => {
    signup(userInfo);
    showSnackBar('User created successfully', 'success');
    setAuthModalType(null);
  };

  return (
    <Form
      onSubmit={errors.length ? handleError : signupSubmit}
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
            <Button color="info" className={classes.googleEmail} variant="contained" startIcon={<GoogleIcon />} style={{ width: '100%' }}>Continue with Google</Button>
          </Grid>
          <Grid item xs={12}>
            <Input
              name="username"
              variant="outlined"
              placeholder="Enter your username"
              type="text"
              margin="dense"
              style={{ width: '100%', paddingTop: '20px' }}
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
              type="password"
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
          <Grid item xs={12}>
            <Input
              name="passwordConfirmation"
              variant="outlined"
              placeholder="Confirm password"
              type="password"
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
          <Grid item xs={12}>

            <Divider style={{ color: '#777' }}>Options</Divider>
          </Grid>
          <Grid item sm={9} xs={12}>
            <Input
              name="bio"
              variant="outlined"
              placeholder="Write your bio here"
              fullWidth
              multiline
              rows={5}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <Avatar style={{ width: '100%', height: '88%' }} src={loading ? spinner : image} className={classes.avatar} alt="profile-picture" />

            <label className={classes.uploadImgLabel}>
              Add your Avatar
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
          <Typography color="secondary" style={{ cursor: 'pointer' }} onClick={() => setLoginModal(true)}>&nbsp;log in</Typography>
        </Grid>
      </DialogContent>
    </Form>
  );
}

export default Signup;
