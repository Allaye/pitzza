import mongoose from 'mongoose';
import { Request, Response } from 'express';
import Order from '../models/order';


const addOrder = async (req: Request, res: Response) => {
    const newOrder = new Order({...req.body, owner: req.user._id});
    try{
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
    Order.findById(req.params.id, (err: any, order: Order) => {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
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