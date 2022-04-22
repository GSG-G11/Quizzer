import { Checkable } from '../../../interfaces';
import dbConnection from '../../config/connections';

export default ({ destination, email }: Checkable) => dbConnection.query(`
  SELECT * from ${destination} WHERE email = $1
`, [email]);
