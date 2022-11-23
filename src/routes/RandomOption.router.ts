import { Router } from 'express';
import { RandomOptionController } from '../controllers/RandomOptionController';
import { AuthController } from '../controllers/AuthController';

class RandomOptionRoutes {
  public router: Router;
  public randomOptionController: RandomOptionController = new RandomOptionController();
  public authController: AuthController = new AuthController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get(
      '/option',
      this.authController.authenticateJWT,
      this.randomOptionController.info,
    );
    this.router.post(
      '/option',
      this.authController.authenticateJWT,
      this.randomOptionController.chooseRandomOption,
    );
  }
}

const randomOptionRoutes = new RandomOptionRoutes();
randomOptionRoutes.routes();

export default randomOptionRoutes.router;
