import connections from '../../database/connections';

export default (teacherId:Number) => connections
  .query(
    'SELECT username, bio, avatar FROM teachers WHERE id = $1',
    [teacherId],
  );
