import request from "supertest";
import express from "express";
import router from ".../index.js";
import test, { describe } from "node:test";


const app = new express();
app.use('/', router);


describe('index route', function() {
    test('responds to /index', async () => {
        const res = await request(app).get('/index');
        expect(res.statusCode).toBe(200);
    })
});