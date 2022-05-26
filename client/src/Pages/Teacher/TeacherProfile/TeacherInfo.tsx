import React, { useState } from 'react';

import {
  Paper, Typography, Avatar, Button, Divider, Stack,
} from '../../../mui';

import { useAuth } from '../../../Hooks';
import classes from './TeacherProfile.module.css';
import EditTeacherProfileModal from './EditTeacherProfileModal';

function TeacherInfo() {
  const { username = '', bio, avatar } = useAuth().user || {};
  const [editProfileModal, setEditProfileModal] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<any>({ username, bio, avatar });

  return (
    <>
      <Paper
        variant="outlined"
        style={{
          border: '1px solid', fontSize: '200px', height: '100%', borderRadius: '10px', padding: '20px', paddingBottom: '25px',
        }}
      >
        <Stack marginBottom="18px">
          <Typography color="primary" fontWeight="bold" marginBottom="5px">My Info</Typography>
          <Divider sx={{ borderBottomWidth: 2, background: 'black' }} />
        </Stack>
        <Stack style={{ marginInline: 'auto', alignItems: 'center' }}>
          <Avatar src={userProfile.avatar} style={{ width: '200px', height: '200px' }}>{username[0].toUpperCase()}</Avatar>
        </Stack>
        <Divider variant="middle" sx={{ background: '#948F8F', margin: '15px', marginTop: '20px' }} />
        <Stack marginBottom="20px">
          <Typography style={{ fontWeight: 'bold', fontSize: '23px', margin: '18px' }}>{userProfile.username.charAt(0).toUpperCase() + userProfile.username.slice(1)}</Typography>
          <Typography style={{ margin: '10px' }}>{userProfile.bio}</Typography>
        </Stack>
        <Stack>
          <Button
            variant="contained"
            style={{ fontSize: '20px' }}
            className={classes.editProfileBtn}
            onClick={() => setEditProfileModal(true)}
          >
            Edit Profile

          </Button>
        </Stack>
      </Paper>
      <EditTeacherProfileModal
        editProfileModal={editProfileModal}
        setEditProfileModal={setEditProfileModal}
        setUserProfile={setUserProfile}
      />
    </>
  );
}

export default TeacherInfo;
