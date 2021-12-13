import mongoose from 'mongoose';
import { Request, Response } from 'express';
import Order from '../models/order';
import Menu from '../models/menu';


const addOrder = async (req: Request, res: Response) => {
    try{
        const food = req.body.foodname;
        const menu = await Menu.findOne({foodname: food});
        if(!menu){
            throw new Error('Food not found');
        }
        req.body.price = menu.price;
        const newOrder = new Order({...req.body, owner: req.user._id});
        await newOrder.save();
        res.status(201).send(newOrder);
    }catch (e) {
        res.status(400).send(e);
    }
};

const getOrders = async (req: Request, res: Response) => {
    try{
        const orders = await Order.find({owner: req.user._id});
        if(!orders){
            res.status(204).send(orders);
        }else{
        res.status(200).send(orders);
        }
    }catch (e) {
        res.status(500).send(e);
    }
};

const getOrderById = async (req: Request, res: Response) => {
    const _id = req.params.id;
    try{
        const order = await Order.findOne({_id, owner: req.user._id});
        if(!order){
            res.status(204).send(order);
        }else{
        res.status(200).send(order);
        }
    }catch (e) {
        res.status(500).send(e);
    }
};

const updateOrder = async (req: Request, res: Response) => {
};

const deleteOrder = async (req: Request, res: Response) => {
    Order.remove({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted order!' });
    });
};


export { addOrder, getOrders, getOrderById, updateOrder, deleteOrder };