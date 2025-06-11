import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';  


import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();  
const app = express(); 
app.use(cors());      
app.use(helmet());     


// Connect to MongoDB
connectDB();

// parse incoming JSON requests
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


// Set the port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
