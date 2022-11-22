import { Router } from 'express';
import RandomOptionController from '../controllers/RandomOptionController';
import { auth } from '../middlewares/auth';

class RandomOptionRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/option', [auth], RandomOptionController.info);
    this.router.post('/option', RandomOptionController.chooseRandomOption);
  }
}

const randomOptionRoutes = new RandomOptionRoutes();
randomOptionRoutes.routes();

export default randomOptionRoutes.router;
