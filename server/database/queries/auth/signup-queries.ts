import dbConnection from '../../config/connections';
import { User } from '../../../interfaces';

export default (data: User) => {
  const {
    destination, username, email, password, bio, avatar,
  } = data;

  return dbConnection.query(
    `
    INSERT INTO ${destination} (username, email, password, bio, avatar) VALUES
      ($1, $2, $3, $4, $5)
      RETURNING id, username, email, bio, avatar
    `,
    [username, email, password, bio, avatar],
  );
};
