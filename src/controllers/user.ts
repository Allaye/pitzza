import mongoose from 'mongoose';
import { Request, Response } from 'express';
import User  from '../models/user';


const register = async (req: Request, res: Response) => {
    const user = new User(req.body);
    try {
        const user = await U
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
}