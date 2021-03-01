const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'postedBy id is required']
    },
    media: {
        type: String,
    },
    caption: {
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
    share: {
        type: Number,
        default: 0
    },
    tags: [{ type: mongoose.Schema.Types.ObjectId }]
});

modulr.exports = mongoose.model('post', postSchema);