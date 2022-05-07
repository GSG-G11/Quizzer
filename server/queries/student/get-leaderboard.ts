import connections from '../../database/connections';

const getLeaderboard = (quizTitle:String) => connections
  .query(
    'SELECT st.username, board.score from leaderboard as board join students as st on board.student_id = st.id where board.quiz_title = $1',
    [quizTitle],
  );

export default getLeaderboard;
