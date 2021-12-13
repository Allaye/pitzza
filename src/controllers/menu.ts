import {connect} from 'mongoose';
import {Request, Response} from 'express';
import Menu from '../models/menu';


class MenuController {

    async addMenu(req: Request, res: Response){
        const menu = new Menu(req.body);
        await menu.save();
        
        res.status(201).send(menu);
    };
    
    async getMenus(req: Request, res: Response){
        const menus = await Menu.find();
        res.send(menus);
    };
    
    async getMenu(req: Request, res: Response){
        const menu = await Menu.findById(req.params.id);
        if (!menu) return res.status(404).send('The menu with the given ID was not found.');
        
        res.send(menu);
    }
    
    async updateMenu(req: Request, res: Response){
        const menu = await Menu.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        if (!menu) return res.status(404).send('The menu with the given ID was not found.');
        res.send(menu);
    };
    
    async deleteMenu(req: Request, res: Response){
        const menu = await Menu.findOneAndRemove({_id: req.params.id});
        if (!menu) return res.status(404).send('The menu with the given ID was not found.');
        res.send(menu);
    };

}

export default new MenuController();