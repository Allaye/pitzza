import {Schema, model} from 'mongoose';
import IOrder from "../interfaces/order";

interface Order {
    foodname: string;
    quantity: number;
    price: number;
    total: number;
    comments: string;
}


const orderSchema = new Schema<IOrder>({
    foodname: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
        default: function() {
            return this.quantity * this.price;
        },
    },
    comments: {
        type: String,
        required: false,
        trim: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'  
    } 
});

const Order = model('order', orderSchema);

export = Order;