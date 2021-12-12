import mongoose from 'mongoose';
import {Request, Response} from 'express';
import Menu from '../models/menu.js';

const addMenu = async (req: Request, res: Response) => {
    const menu = new Menu(req.body);
    await menu.save();
    res.status(201).send(menu);
};

const getMenus = async (req: Request, res: Response) => {
    const menus = await Menu.find();
    res.send(menus);
};

const getMenu = async (req: Request, res: Response) => {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).send('The menu with the given ID was not found.');
    res.send(menu);
}

const updateMenu = async (req: Request, res: Response) => {
    const menu = await Menu.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    if (!menu) return res.status(404).send('The menu with the given ID was not found.');
    res.send(menu);
};

const deleteMenu = async (req: Request, res: Response) => {
    const menu = await Menu.findOneAndRemove({_id: req.params.id});
    if (!menu) return res.status(404).send('The menu with the given ID was not found.');
    res.send(menu);
};

export {addMenu, getMenus, getMenu, updateMenu, deleteMenu};