const mongoose = require('mongoose');

var blockListSchema = new mongoose.Schema({
    blockedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'blockedBy id is required']
    },
    blocked: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'blocked id is required']
    },
    status: {
        type: String,
        enum: ['blocked', 'unblocked'],
        default: 'blocked'
    },
    count: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('blockList',blockListSchema);