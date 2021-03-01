const mongoose = require('mongoose');

var chatGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'virtualGroup'
    },
    members: [{ type: mongoose.Schema.Types.ObjectId }],
    profilePic: {
        type: String,
        default: 'https://designzonic.com/download/wp-content/uploads/2019/04/Red-Avatar-Luar-Arts.png'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'created By Id is required']
    },
    admin: [{ type: mongoose.Schema.Types.ObjectId }],
    blocked: [{ type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model('chatGroup', chatGroupSchema);