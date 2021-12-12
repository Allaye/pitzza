import {Schema, model} from 'mongoose';
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import IUser from "../interfaces/user.js";
import Order from '../models/order.js';


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email:{type: String,required: true, trim: true, unique: true,
        validate(value: string) {
            if(!validator.isEmail(value)){
                throw new Error('Email is in valid!')
            }
        }
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
    },
    tokens: [{ 
        token: {
            type: String,
            required: true
        }
    }]        
});















const User = model('user', userSchema);

export = User;