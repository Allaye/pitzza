import {Schema, model} from 'mongoose';


interface User {
    name: string;
    email: string;
    address: string;
}


const userSchema = new Schema<User>({
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
    }        
});

const User = model('user', userSchema);

export = User;