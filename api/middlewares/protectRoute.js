import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    const token = req.cookies.access_token || req.headers.authorization.split(' ')[1];
    if (!token) {
        const error = new Error('You are not authorized to access this route');
        error.statusCode = 401;
        throw error;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            const error = new Error('No user found with this id');
            error.statusCode = 404;
            throw error;
        }
        req.user = user;
        next();
    } catch (error) {
        error.statusCode = 401;
        next(error);
    }
}

export default protectRoute;