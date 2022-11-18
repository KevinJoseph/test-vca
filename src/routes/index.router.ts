import { Request, Response, Router } from 'express';

class IndexRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get('/', (req: Request, res: Response) => {
      res.send('Hello');
    });
  }
}

const indexRouter = new IndexRouter();
indexRouter.routes();

export default indexRouter.router;
