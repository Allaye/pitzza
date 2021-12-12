import { Document } from "mongoose";


interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    address: string;
    admin: boolean;
    tokens: Array<object>;
}

export = IUser;