import request from 'supertest';
import { addMenu } from "./menu";


describe('test if menu can be created', () => {
    it('should return a status code of 200', async () => {
        const res = await request(addMenu).post('/create/menu')
            .send({
                "foodname": "test",
                "description": "test",
                "price": "test",
            });
        expect(res.status).toBe(200);
    });
});