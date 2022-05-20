/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import spinner from '../../../Assets/spinner.gif';
import classes from './StudentProfile.module.css';
import { useAuth, useSnackBar } from '../../../Hooks';
import { Form, Input, Submit } from '../../../Components/FormUI';
import { editTeacherProfileSchema } from '../../../Validation';
import {
  Dialog,
  DialogContent,
  Grid,
  InputAdornment,
  DialogTitle,
  PersonIcon,
  Avatar,
} from '../../../mui';

function EditStudentProfileModal({ editProfileModal, setEditProfileModal, setUserProfile }:any) {
  const { username, bio, avatar } = useAuth().user || {};
  const { getUser } = useAuth();
  const { showSnackBar } = useSnackBar();
  const [image, setImage] = useState<string>(avatar || '');
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = {
    username, bio, avatar: '',
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

  const editProfile = async (userInfo:any) => {
    try {
      await axios.patch('/api/v1/student/profile', userInfo);
      setUserProfile(userInfo);
      getUser();
    } catch (err:any) {
      const { message } = err.response.data;
      showSnackBar(message, 'error');
    }
  };

  const TeacherProfileEdit = (userInfo: any) => {
    if (userInfo !== initialValues) {
      const updateUser = { ...userInfo, avatar: image };
      editProfile(updateUser);
      setEditProfileModal(false);
      showSnackBar('Student profile is edited successfully', 'success');
    } else {
      showSnackBar('Change your information to edit', 'warning');
    }
  };

  return (
    <Dialog open={editProfileModal} onClose={() => setEditProfileModal(false)}>
      <Form
        onSubmit={(v) => {
          TeacherProfileEdit(v);
        }}
        initialValues={initialValues}
        validationSchema={editTeacherProfileSchema}
      >
        <DialogTitle
          textAlign="center"
          padding="30px"
          fontWeight="600"
          fontSize="30px"
        >
          Edit Your Profile
        </DialogTitle>
        <DialogContent style={{ alignItems: 'center', textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="username"
                variant="outlined"
                placeholder="Enter your name"
                label="Full Name"
                type="text"
                margin="dense"
                style={{ width: '100%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
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
                  src={image === avatar && !loading ? avatar : loading ? spinner : image}
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
              <Submit color="primary" className={classes.editSubmit} variant="contained" style={{ alignSelf: 'center' }}>Edit profile</Submit>
            </Grid>
          </Grid>
        </DialogContent>
      </Form>
    </Dialog>
  );
}

export default EditStudentProfileModal;
