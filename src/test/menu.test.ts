import request from 'supertest';
import app from '../app';


describe("test creating menu route", () => {
    test("return response should be 201", async()=>{
        const res = await request(app).post('/create/menu').send({
            foodname: "fufu",
            description: "fresh fufu",
            price: 30,
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('foodname');
        expect(res.body).toHaveProperty('price');
        expect(res.body).toHaveProperty('description');
    });
})