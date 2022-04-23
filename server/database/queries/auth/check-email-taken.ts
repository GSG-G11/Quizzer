import escape from 'pg-escape';
import { Checkable } from '../../../interfaces';
import dbConnection from '../../config/connections';

export default ({ destination, email }: Checkable) => dbConnection.query(
  escape('SELECT * from %I WHERE email = $1', destination),
  [email],
);
