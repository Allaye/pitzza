import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

interface JwtPayload {
    _id: string
  }


class AuthController{
    async auth(req: Request, res: Response, next: NextFunction){
        try {
            const token: string | undefined | string[] = req.headers.authorization?.replace('Bearer ', '');
            // const token: string | undefined  = req.header.authorization.replace('Bearer ', '');
            if (token){
                const { _id } = jwt.verify(token, "BOLUWATIFE") as JwtPayload;
                const user = await User.findOne({ _id: _id, 'tokens.token': token})
                if(!user){
                    throw new Error()
                }
                req.token = token
                req.user = user
                next()
            }else{
                throw new Error()
            }
    
        } catch (error) {
            res.status(401).send({error: 'please provide authentication'})
        }
    }
}

export default new AuthController();