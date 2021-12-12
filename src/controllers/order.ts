import mongoose from 'mongoose';
import { Request, Response } from 'express';
import Order from '../models/order';


const addOrder = async (req: Request, res: Response) => {
    const newOrder = new Order(req.body);
    newOrder.save((err: any, order: Order) => {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
};

const getOrders = async (req: Request, res: Response) => {
    Order.find({}, (err: any, order: Order) => {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
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