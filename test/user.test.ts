import request from 'supertest';
import app from '../src/app';
import {connect, closeDatabase } from "../src/db/mongoose";

beforeAll(async () => await connect());

afterEach(async () => await closeDatabase());

afterAll(async () => await closeDatabase());

describe("test for User routes", () => {
    test("return response should be 201 and other properties", async()=>{
        const res = await request(app).post('/registration').send({
            name: "1testing",
            email: "1testing@testing.com",
            address: "planet earth sister",
            password: "testing",
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('user');
    });

    test("return response should be 200 and other properties", async()=>{
        const res = await request(app).post('/login').send({
            email: "1testing@testing.com",
            password: "testing",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('user');
    });

    test("route should require authorization", async()=>{
        const res = await request(app).post('/logout');
        expect(res.statusCode).toBe(401);
    });

    test("route should authenticate when provided an auth token", async()=>{
        const res = await request(app).post('/logout')
        .set('Authorization', 'bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI3Y2RlYWI3NjU4NGJkYWNkNGQxZjQiLCJpYXQiOjE2Mzk0MzY2MTJ9.m6uPyCqN6udjxRJm_h5gQhRrEebn43Q4dKO3YVXkYh4');
        expect(res.statusCode).toBe(401);
    });

})