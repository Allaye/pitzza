import {Schema, model, Document} from 'mongoose';
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {IUser, UserModel} from "../interfaces/user.js";
import Order from '../models/order.js';
// import dotenv from "dotenv";
// dotenv.config("../../.env");

const userSchema = new Schema<IUser, UserModel>({
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

}, {timestamps: true});


userSchema.virtual('orders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'user'
});


userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    // delete userObject.password;
    // delete userObject.tokens;
    return userObject;
}

userSchema.methods.generateAuthToken = async function(userInstance: IUser) {
    try {
        // console.log(userInstance);
        // console.log("generateAuthToken");
        const user = userInstance;
        // console.log(user);
        // console.log(user._id);
        // console.log(User);
        const token = jwt.sign({_id: user._id.toString()}, "BOLUWATIFE");
        // console.log(token);
        user.tokens = user.tokens.concat({token});
        // console.log(user.tokens);
        await user.save();
        return token;
    } catch (error) {
        console.log(error);
        return error;
    }
} 

userSchema.statics.findByCredentials = async (email: string, password: string) => {
    const user = await User.findOne({email});
    if(!user){
        throw new Error('Unable to login');
    }
    const isMatch = await bcrypt.compare(password, user.password as string);
    if(!isMatch){
        throw new Error('Unable to login');
    }
    return user;
}


userSchema.pre<IUser>('save', async function hashPassword(next) {
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});


userSchema.pre<IUser>('remove', async function deleteUserOrders(next) {
    const user = this;
    await Order.deleteMany({user: user._id});
    next();
});


const User = model<IUser, UserModel>('user', userSchema);

export = User;