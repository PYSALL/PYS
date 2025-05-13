import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { connectDB } from '../config/db.js';
import { app, port } from '../server.js';
import { getProducts, postProduct, updateProduct, deleteProduct } from '../controller/product.controller.js';

const router = express.Router();

router.post('/', postProduct);

router.delete("/:id", deleteProduct);

router.get("/", getProducts);



router.patch("/:id", updateProduct);


export default router;