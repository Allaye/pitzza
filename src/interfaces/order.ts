import mongoose, { Document } from "mongoose";


interface IOrder extends Document {
    foodname: string;
    quantity: number;
    price: number;
    total: number;
    comments: string;
    owner: mongoose.Schema.Types.ObjectId;
}

export = IOrder;