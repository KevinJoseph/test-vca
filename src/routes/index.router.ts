import { Request, Response, Router } from 'express';
import { RandomArray } from '../common/RandomArray/RandomArray';

class IndexRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get('/', (req: Request, res: Response) => {
      res.send('Hello');
    });

    this.router.post('/option', (req: Request, res: Response) => {
      const array = req.body.data;

      if (array.length === process.env.LIMIT_OPTION) {
        res.send(`You exceeded the limit of options ${process.env.LIMIT_OPTION} allow.`);
      }

      const randomArray = new RandomArray(array);
      const result = randomArray.chooseArrayRandom();

      res.send(result);
    });
  }
}

const indexRouter = new IndexRouter();
indexRouter.routes();

export default indexRouter.router;
