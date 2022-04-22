import connections from '../../config/connections';

const getLeaderboard = () => connections.query('select * from leaderboard');

export default getLeaderboard;
