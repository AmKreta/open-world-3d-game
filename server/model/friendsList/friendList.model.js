const mongoose = require('mongoose');

const friendListSchema = new mongoose.Schema({
    requestSentBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'requestSentBy user id is required']
    },
    requestReceivedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'requestReceivedBy user id is required']
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    count: {
        type: Number,
        dafault: 1
    }
});

module.exports = mongoose.model('friendList', friendListSchema);