import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import { signupValidation, signinValidation } from '../middlewares/joi';
import jwt from 'jsonwebtoken';

export class AuthController {
  async signup(req: Request, res: Response) {
    // Validation
    const { error } = signupValidation(req.body);
    if (error) return res.status(400).json(error.message);

    // Email Validation
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).json('Email already exists');

    // Saving a new User
    try {
      const newUser: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.password = await newUser.encrypPassword(newUser.password);
      const savedUser = await newUser.save();

      const token: string = jwt.sign({ _id: savedUser._id }, 'secret' || '', {
        expiresIn: 60 * 60 * 24,
      });
      // res.header('auth-token', token).json(token);
      res.send({ token: token });
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async signin(req: Request, res: Response) {
    const { error } = signinValidation(req.body);
    if (error) return res.status(400).json(error.message);
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json('Email or Password is wrong');
    const correctPassword = await user.validatePassword(req.body.password);
    if (!correctPassword) return res.status(400).json('Invalid Password');

    // Create a Token
    const token: string = jwt.sign({ _id: user._id }, 'secret' || '');
    res.send({ token: token });
  }
}
