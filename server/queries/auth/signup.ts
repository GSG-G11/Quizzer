import escape from 'pg-escape';
import dbConnection from '../../database/connections';
import { User } from '../../interfaces';

export default (data: User) => {
  const {
    destination, username, email, password, bio, avatar,
  } = data;

  return dbConnection.query(
    escape(`
    INSERT INTO %I (username, email, password, bio, avatar) VALUES
      ($1, $2, $3, $4, $5)
      RETURNING id, username, email, bio, avatar
    `, destination),
    [username, email, password, bio, avatar],
  );
};
