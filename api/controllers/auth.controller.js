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

    if (!username || !password || username === '' || password === '') {
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
            { id: validUser._id},
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


export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const token = jwt.sign(
          { id: user._id, },
          process.env.JWT_SECRET
        );
        const { password, ...rest } = user._doc;
        res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          firstname: name.split(' ')[0],
          lastname: name.split(' ')[1],
          username:
            name.toLowerCase().split(' ').join('') +
            Math.random().toString(9).slice(-4),
          email,
          password: hashedPassword,
          profilePicture: googlePhotoUrl,
        });
        await newUser.save();
        const token = jwt.sign(
          { id: newUser._id, },
          process.env.JWT_SECRET
        );
        const { password, ...rest } = newUser._doc;
        res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
};      