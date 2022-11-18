import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes/index.router';

dotenv.config();

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(express.json());
    this.routes();
  }

  routes() {
    this.app.use('/api', indexRouter);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('server on port', this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();
