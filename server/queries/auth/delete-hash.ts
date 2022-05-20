import dbConnection from '../../database/connections';

export default (role: 'teacher' | 'student', userId: number, hash: string) => (role === 'teacher'
  ? dbConnection.query('DELETE FROM teachers_hashes WHERE user_id = $1 AND hash = $2 RETURNING *', [userId, hash])
  : dbConnection.query('DELETE FROM students_hashes WHERE user_id = $1 AND hash = $2 RETURNING *', [userId, hash]));
