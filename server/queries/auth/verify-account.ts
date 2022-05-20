import dbConnection from '../../database/connections';

export default (role: 'teacher' | 'student', userId: number) => (role === 'teacher'
  ? dbConnection.query(`
      UPDATE teachers SET is_verified = TRUE WHERE id = $1 RETURNING *
      `, [userId])
  : dbConnection.query(`
    UPDATE students SET is_verified = TRUE WHERE id = $1 RETURNING *
    `, [userId]));
