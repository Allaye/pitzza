import {Schema, model} from 'mongoose';
import IUser from "../interfaces/user";


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    }        
});

const User = model('user', userSchema);

export = User;