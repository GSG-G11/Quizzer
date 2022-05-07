import app from './app';

const port = app.get('port');
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
