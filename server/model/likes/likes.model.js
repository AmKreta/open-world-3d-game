const mongoose = require('mongoose');

var likeSchema = new mongoose.Schema({
    likedId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'likedId is required']
    },
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'likedBy is required']
    },
});

module.exports = new mongoose.model('like', likeSchema);