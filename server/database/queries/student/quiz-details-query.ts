import connections from '../../config/connections';

export default (id:String) => connections
  .query(
    'SELECT * FROM questions WHERE quiz_id = $1',
    [id],
  );
