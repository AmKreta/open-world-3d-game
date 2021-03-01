const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    level: {
        type: Number,
        default: 1
    },
    friends: {
        type: Number,
        default: 0
    },
    blocked: {
        type: Number,
        default: 0
    },
    totalLikes: {
        type: Number,
        default: 0
    },
    ownedCard: [{ type: String }],
    ownedWeapons: [{ type: String }],
    ownedPowerUps: [{ type: String }],
    isCop: {
        type: Boolean,
        default: false
    },
    isCriminal: {
        type: Boolean,
        default: false
    },
    profilepic: {
        type: String,
        default: 'https://image.freepik.com/free-vector/gamer-youtuber-gaming-avatar-with-headphones-esport-logo_8169-260.jpg'
    },
    bio: {
        type: String,
        default: 'playing virtual life'
    },
});

module.exports = mongoose.model('user', userSchema);