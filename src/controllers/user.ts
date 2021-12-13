import { Request, Response } from 'express';
import User  from '../models/user';




declare module 'express-serve-static-core' {
    interface Request {
        [x: string]: any;
        user: any
    }
    // interface Response {
    //     error: (code: number, message: string) => Response;
    //     success: (code: number, message: string, result: any) => Response
    // }
}



export const register = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        // console.log(user);
        const token = await user.schema.methods.generateAuthToken(user);
        // console.log(token);
        await user.save();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
}

export const login = async (req: Request, res: Response) => {
    try{
        console.log(req.body);
        const user = await User.findByCredentials(req.body.email, req.body.password);
        console.log(user);
        const token = await user.schema.methods.generateAuthToken(user);
        res.status(200).send({ user, token });
    }catch(err){
        res.status(400).send(err);
    } 
}

export const logout = async (req: Request, res: Response) => {
    try{
        console.log(req.user);
        req.user.tokens = req.user.tokens.filter((token: { token: any; }) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send();
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}   

export const updateUser = async (req: Request, res: Response) => {
    const updates = Object.keys(req.body);
    const allowupdates = ['name', 'age', 'email', 'password']
    const isvalidoperation = updates.every((update)=>{
        return allowupdates.includes(update)
    })
    if(!isvalidoperation){
        return res.status(400).send({error: 'Invalid updates'});
    }
    try{
        updates.forEach((update)=>{
            req.user[update] = req.body[update];
        })
        await req.user.save();
        res.send(req.user);
    }catch(err){
        res.status(400).send(err);
    }
}