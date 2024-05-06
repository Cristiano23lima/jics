import express from 'express';
import mongoose from 'mongoose';

import CategoriesModel from './models/categories.js';
import ModalitiesModel from './models/modalities.js';

const server = express();

let workspace;
if(process.env.WORKSPACE){
    workspace = process.env.WORKSPACE;
}else{
    workspace = "dev"
}

const dbName = "jics_"+workspace;

mongoose.connect("mongodb+srv://jics_backend:Y3sjV3ZhlDVM2nVH@jics.neexryw.mongodb.net/?retryWrites=true&w=majority&appName=jics", {dbName})

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.post('/api/v1/categories', async (req, res) => {
    const body = req.body;

    await CategoriesModel.create(body);

    console.log(body);

    return res.json(body)
})

server.post("/api/v1/modalities", async(req, res) => {
    const body = req.body;

    const result = await ModalitiesModel.create(body);

    return res.json(result);
})

server.get("/api/v1/categories/:id", async(req, res) => {
    const id = req.params.id;

    const result = await CategoriesModel.findById(id);

    return res.json(result);
})

server.get("/api/v1/modalities/:id", async(req, res) => {
    const id = req.params.id;

    const result = await ModalitiesModel.findById(id);
    result.categories = await result.categories.map(async e => {
        console.log(e);
        return await CategoriesModel.findById(e);
    })

    return res.json(result);
})

server.listen(3000, () => {
    console.log("Server started")
})