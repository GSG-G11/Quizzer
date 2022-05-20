import connections from '../../database/connections';

interface ITeacherInfo {
  username: string;
  bio: string;
  avatar: string;
  teacherId: number;
}

export default ({
  username, bio, avatar, teacherId,
}: ITeacherInfo) => connections
  .query(
    'UPDATE students SET username = $1, bio = $2 , avatar= $3 WHERE id = $4;',
    [username, bio, avatar, teacherId],
  );
