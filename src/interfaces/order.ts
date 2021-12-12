import { Document } from "mongoose";


interface IOrder extends Document {
    foodname: string;
    quantity: number;
    price: number;
    total: number;
    comments: string;
}

export = IOrder;