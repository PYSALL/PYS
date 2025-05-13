import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import  productRoutes  from './routes/product.route.js';
dotenv.config();

export const app = express();
app.use(express.json()); // Allows us to accept JSON data in the body

export const port = 5000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// console.log(process.env.MONGO_URI);  

app.use("/api/products", productRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});