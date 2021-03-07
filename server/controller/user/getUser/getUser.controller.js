const user = require('../../../model/user/user.model');
module.exports.getUserById = (req, res, next) => {
    try {
        let data = user.findMany({});
        res.status(200).json(data);
    }
    catch (err) {
        res.status(400).json({ sucess: 'failed', payload: err })
    }
};