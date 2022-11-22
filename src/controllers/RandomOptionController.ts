import { Request, Response, Router } from 'express';
import { RandomArray } from '../common/RandomArray/RandomArray';

class RandomOptionController {
  async info(req: Request, res: Response) {
    return res.json('Please, you send a request post and add a body whit options');
  }
  async chooseRandomOption(req: Request, res: Response) {
    const array = req.body.data;

    if (array.length === process.env.LIMIT_OPTION) {
      res.send(`You exceeded the limit of options ${process.env.LIMIT_OPTION} allow.`);
    }

    const randomArray = new RandomArray(array);
    const result = randomArray.chooseArrayRandom();

    res.json(result);
  }
}
export default new RandomOptionController();