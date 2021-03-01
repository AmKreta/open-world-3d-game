const mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    receivedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'receivedby Id is required']
    },
    sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'sentBy Id is required']
    },
    media: {
        type: String
    },
    text: {
        type: String
    }
});

module.exports = mongoose.model('chat', chatSchema);