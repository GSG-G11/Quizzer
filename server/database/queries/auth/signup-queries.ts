import dbConnection from '../../config/connections';
import User from '../../../interfaces';

const createNewUserQuery = (data: User) => {
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

const checkEmailTakenQuery = ({ destination, email }) => dbConnection.query(`
  SELECT * from ${destination} WHERE email = $1
`, [email]);

export { checkEmailTakenQuery, createNewUserQuery };
