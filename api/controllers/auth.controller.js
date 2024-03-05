import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { firstname, lastname, username, email, password } = req.body;

    if (!firstname || !lastname || !username || !email || !password) {
        const error = new Error('All fields are required');
        error.statusCode = 400;
        return next(error);
    }

    try {
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = bcryptjs.hashSync(password, 12);

        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.json({ message: "Signup successful" });
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        const error = new Error('All fields are required');
        error.statusCode = 400;
        return next(error);
    }

    try {
        const validUser = await User.findOne({ username });
        if (!validUser) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign(
            { id: validUser._id, isAdmin: validUser.isAdmin },
            process.env.JWT_SECRET
        );

        const { password: pass, ...rest } = validUser._doc;

        res
            .status(200)
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .json(rest);
    } catch (error) {
        next(error);
    }
};

export const logout = async (req, res) => {
    res.clearCookie('access_token').json({ message: "Logout successful" });
};
