import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToMongoDB from './db/connectToMongoDB.js';
// Import routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.use('/api/auth', authRoutes);

app.use('/api/message', messageRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
}
);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })

});