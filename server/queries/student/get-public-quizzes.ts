import connections from '../../database/connections';

const getPublicQuizzes = (studentId:Number) => connections
  .query(
    `SELECT board.quiz_title, board.score from leaderboard as board join
    students as st on board.student_id = st.id where st.id = $1`,
    [studentId],
  );

export default getPublicQuizzes;
