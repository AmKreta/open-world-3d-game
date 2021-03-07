const user = require('../../../model/user/user.model');

module.exports.createUser = async (req, res, next) => {
    try {
        let data = await user.create(req.body);
        res.status(201).json({ sucess: true, payload: data });
    }
    catch (err) {
        res.status(400).json({ sucess: false, payload: err });
    }
}

