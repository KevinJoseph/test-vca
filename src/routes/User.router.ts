import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

export class UserRoutes {
  router: Router;
  public authController: AuthController = new AuthController();

  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() {
    this.router.post('/signup', this.authController.signup);
    this.router.post('/signin', this.authController.signin);
  }
}
