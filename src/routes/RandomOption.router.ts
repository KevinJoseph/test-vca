import { Router } from 'express';
import { RandomOptionController } from '../controllers/RandomOptionController';
import { TokenValidation } from '../middlewares/verifyToken';

export class RandomOptionRoutes {
  public router: Router;
  public randomOptionController: RandomOptionController = new RandomOptionController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/option', TokenValidation, this.randomOptionController.info);
    this.router.post('/option', TokenValidation, this.randomOptionController.chooseRandomOption);
  }
}
