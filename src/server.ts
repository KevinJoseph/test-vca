import express, { Express, Request, Response } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import { RandomOptionRoutes } from './routes/RandomOption.router';
import { UserRoutes } from './routes/User.router';

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
    this.mongo();
  }

  routes() {
    this.app.use('/api', new RandomOptionRoutes().router);
    this.app.use('/api', new UserRoutes().router);
  }

  private mongo() {
    connect(process.env.MONGO_URI as string)
      .then(() => {
        console.log('[+] Database connected with Atlas Cluster');
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('server on port', this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();
