import React from 'react';
import {
  Button, Card, CardActionArea, CardContent, CardMedia, Dialog, Grid, Typography,
} from '../../mui';
import teacher from '../../Assets/teacher.png';
import student from '../../Assets/student.png';

interface IRole {
  role: string;
  setRole: (role: string) => void;
  modal: string;
  setModal: (modal: string) => void
}

function RoleModal({
  role, setRole, modal, setModal,
}: IRole) {
  return (

    <Dialog
      open={modal === 'role'}
      onClose={() => setModal('')}
    >
      <Grid
        container
        spacing={5}
        style={{
          padding: '30px', textAlign: 'center',
        }}
      >
        <Grid item xs={12}>
          <Typography alignSelf="center" variant="h4" style={{ fontWeight: 600 }}>Continue as</Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card
            style={{ boxShadow: '0 7px #F9AA33', border: '1px solid', borderRadius: '10px' }}
          >
            <CardActionArea onClick={() => {
              setRole('teacher');
              setModal('login');
            }}
            >
              <CardMedia
                component="img"
                image={teacher}
                alt="teacher"
              />
              <CardContent>
                <Typography variant="h4" style={{ fontWeight: 600 }}>Teacher</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card style={{ boxShadow: '0 7px #F9AA33', border: '1px solid', borderRadius: '10px' }}>
            <CardActionArea onClick={() => {
              setRole('student');
              setModal('login');
            }}
            >
              <CardMedia
                component="img"
                image={student}
                alt="student"
              />
              <CardContent>
                <Typography variant="h4" style={{ fontWeight: 600 }}>Student</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default RoleModal;
