import { join } from 'path';
import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes';
import { clientError, serverError } from './errors';

const app = express();
dotenv.config();

const {
  env: { PORT, NODE_ENV },
} = process;

app.set('port', PORT || 5000);
app.disable('x-powered-by');
app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
  compression(),
  cors(),
]);

app.use('/api/v1/', router);

if (NODE_ENV === 'development' || NODE_ENV === 'test') {
  app.get('/', (req, res) => {
    res.json({ message: 'Server Is Running' });
  });
}

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(clientError);
app.use(serverError);

export default app;
