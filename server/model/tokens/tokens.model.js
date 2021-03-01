const mongoose = require('mongoose');

var tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'userId is required']
    },
    accessToken: {
        type: String,
        required: [true, 'accessToken is required']
    },
    refreshToken: {
        type: String,
        required: [true, 'refreshToken is required']
    },
});

module.exports = mongoose.model('token', tokenSchema);