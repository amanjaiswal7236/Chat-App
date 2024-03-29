import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectToMongoDB from './db/connectToMongoDB.js';

// Import routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import { app, server } from "./socket/socket.js"

app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config();
connectToMongoDB(); // Connect to MongoDB

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
