const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: [true, 'groupName is required']
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'createdBy id is required']
    },
    admins: [{ type: mongoose.Schema.Types.ObjectId }],
    blocked: [{ type: mongoose.Schema.Types.ObjectId }],
    members: [{ type: mongoose.Schema.Types.ObjectId }],
    totalLikes: {
        type: Number,
        default: 0
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

module.exports = mongoose.model('Group', groupSchema);