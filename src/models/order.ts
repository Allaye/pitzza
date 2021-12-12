import {Schema, model} from 'mongoose';


interface Order {
    foodname: string;
    quantity: number;
    price: number;
    total: number;
    comments: string;
}


const orderSchema = new Schema<Order>({
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
    }        
});

const Order = model('order', orderSchema);

export = Order;