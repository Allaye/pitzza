import { Document } from "mongoose";

interface IMenu extends Document {
    foodname: string;
    price: number;
    description: string;
}

export = IMenu;