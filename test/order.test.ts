import request from 'supertest';
import app from '../src/app';
import {connect, closeDatabase } from "../src/db/mongoose";

beforeAll(async () => await connect());

afterEach(async () => await closeDatabase());

afterAll(async () => await closeDatabase());

describe("test for Order routes", () => {
    test("return response should be 401 and other properties", async()=>{
        const res = await request(app).post('/create/order').send({
            foodname: "pitzza",
            comments: "hot one please and quick",
            quantity: 30,
        });
        expect(res.statusCode).toBe(401);
    });
})