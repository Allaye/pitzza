import { Document, Model } from "mongoose";


export interface IUser{
    [x: string]: any;
    name: string;
    email: string;
    password: string;
    address: string;
    admin: boolean;
    tokens: Array<object>;
}

export interface UserModel extends Model<IUser> {
    findByCredentials(email: string, password: string): Promise<IUser>;
}

