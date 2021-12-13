import {Schema, model} from 'mongoose';
import IMenu from "../interfaces/menu";

interface Menu {
    foodname: string;
    price: number;
    description: string;
}



const menuSchema = new Schema<IMenu>({
    foodname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
        trim: true
    }        
});

const Menu = model('menu', menuSchema);

export default Menu;