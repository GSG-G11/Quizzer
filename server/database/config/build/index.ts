import { readFileSync } from 'fs';
import { join } from 'path';
import dbConnection from '../connections';

export default () => {
  const query = readFileSync(join(__dirname, '../build/init.sql')).toString()
    + readFileSync(join(__dirname, '../build/fakeData.sql')).toString();
  return dbConnection.query(query);
};
