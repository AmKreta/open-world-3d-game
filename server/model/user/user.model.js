const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const vehicleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name of the item is required']
    },
    path:{
        type:String,
        required:[true,'path of the item is required']
    },
    price:{
        type:Number,
        required:[true,'price of the item is required']
    },
    level:{
        type:Number,
        default:1
    }
},{timestamp:false});

const characterSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name of the item is required']
    },
    path:{
        type:String,
        required:[true,'path of the item is required']
    },
    price:{
        type:Number,
        required:[true,'price of the item is required']
    },
    level:{
        type:Number,
        default:1
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:[true,'gender of character required']
    }
},{timestamp:false});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
 userName: {
        type: String,
        required: [true, 'userName is required']
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
    profileLikes: {
        type: Number,
        default: 0
    },
    vehicles: [vehicleSchema],
    characters: [characterSchema],
    //powerUps: [itemSchema],
    role:{
        type:String,
        enum:['cop','criminal','citizen'],
        default:'citizen'
    },
    profilePic: {
        type: String,
        default: 'https://image.freepik.com/free-vector/gamer-youtuber-gaming-avatar-with-headphones-esport-logo_8169-260.jpg'
    },
    bio: {
        type: String,
        default: 'playing virtual life'
    },
    coins:{
        type:Number,
        default: 50
    }
});

userSchema.pre('save', async function (next) {
    try {
        this.password = await bcrypt.hash(this.password, 10);
    }
    catch (err) {
        next(err);
    }
});

module.exports = mongoose.model('user', userSchema);
