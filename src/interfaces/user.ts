import { Document } from "mongoose";


interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    address: string;
    admin: boolean;
}

export = IUser;