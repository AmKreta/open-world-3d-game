const user = require('../../model/user/user.model');
const bcrypt = require('bcrypt');

module.exports.getUserById = require('./getUser/getUser.controller').getUserById;
module.exports.deleteUser = require('./deleteUser/deleteUser.controller').deleteUser;
module.exports.updateUser = require('./updateUser/updateUser.controllers').updateUser;


// @method  post
// @route /api/auth/signUp
module.exports.createUser = async (req, res, next) => {
    try {
        let data = await user.create(req.body);
        res.status(201).json({ sucess: true, payload: data });
    }
    catch (err) {
        res.status(400).json({ sucess: false, payload: err });
    }
}

// @method post
// @route  /api/auth/login
module.exports.login = async (req, res, next) => {
    let { userName, password } = req.body;

    try {
        if (userName === '' || userName === null) {
            throw ('userName is not present');
        }
        else if (password === '' || password === null) {
            throw ('password is not present');
        }
        else {
            let data = await user.findOne({ userName });
            let sucess = await bcrypt.compare(password, data.password);
            if (sucess) {
                res.status(200).json({ sucess, payload: data });
            }
            else {
                throw ('one of userName or password is incorrect');
            }
        }
    }
    catch (err) {
        res.status(400).json({ sucess: 'failed', payload: err })
    }
}

// @method post
// @access private
// @url /api/user/
module.exports.buyItem = async (req, res, next) => {
    let _id = req.body._id;
    let name = req.body.name;
    let path = req.body.path;
    let price = req.body.price;
    let type = req.body.type;
    let level = req.body.lelel || 1;
    let gender=req.body.gender;
    let data = await user.findOne({_id});
    try {
        if (data.coins >= price) {
            await user.updateOne({ _id }, { $addToSet: { [`${type}`]: { name, path, price, level,gender } } }, { runValidators: true });
            await user.updateOne({ _id }, { $inc: { coins: -price } });
            res.status(200).json({ sucess: true, payload: 'added to collection' });
        }
        else {
            throw 'not enougn coins';
        }
    }
    catch (err) {
        res.status(400).json({ sucess: 'failed', payload: err });
    }
}

