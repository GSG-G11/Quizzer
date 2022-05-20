import dbConnection from '../../database/connections';

export default (role: 'teacher' | 'student', userId: number, hash: string) => (role === 'teacher'
  ? dbConnection.query('INSERT INTO teachers_hashes (user_id, hash) VALUES ($1, $2) RETURNING hash', [userId, hash])
  : dbConnection.query('INSERT INTO students_hashes (user_id, hash) VALUES ($1, $2) RETURNING hash', [userId, hash]));
