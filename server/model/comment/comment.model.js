const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    commentedOn: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'commentedOn Id is required']
    },
    commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'commentedBy Id is required']
    },
    media: {
        type: String
    },
    text: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    tags: [{ type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model('comment', commentSchema);