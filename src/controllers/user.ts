import { Request, Response } from 'express';
import User  from '../models/user';


const register = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        const token = await user.generateAuthToken();
        await user.save();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
}