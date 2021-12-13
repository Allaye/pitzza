import request from 'supertest';
import app from '../src/app';
// import Menu from '../src/models/menu';
import {connect, closeDatabase, clearDatabase } from "../src/db/mongoose";

beforeAll(async () => await connect());

afterEach(async () => await clearDatabase());

afterAll(async () => await closeDatabase());

describe("test for Menu routes", () => {
    const menu = {
        foodname: "fufu",
        description: "fresh fufu",
        price: 30,
    }
    
    test("return response should be 201 and other properties", async()=>{
        
        
        const res = await request(app).post('/create/menu').send({
            foodname: "fufu",
            description: "fresh fufu",
            price: 30,
        });
        expect(res.statusCode).toBe(201);
        // expect(res.body).toHaveProperty('foodname');
        // expect(res.body).toHaveProperty('price');
        // expect(res.body).toHaveProperty('description');
    });

    // test("return response should be 200 and other properties", async()=>{
    //     const res = await request(app).get('/get/menus');
    //     expect(res.statusCode).toBe(200);
    //     // expect(res.body[0]).toHaveProperty('foodname');
    //     // expect(res.body[0]).toHaveProperty('price');
    //     // expect(res.body[0]).toHaveProperty('description');
    // });

    // test("return response should be 201 and other properties", async()=>{
    //     const res = await request(app).post('/create/menu').send({
    //         foodname: "fufu",
    //         description: "fresh fufu",
    //         price: 30,
    //     });
    //     expect(res.statusCode).toBe(201);
    //     expect(res.body).toHaveProperty('foodname');
    //     expect(res.body).toHaveProperty('price');
    //     expect(res.body).toHaveProperty('description');
    // });
})