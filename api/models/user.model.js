import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profilePicture: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;