module.exports.deleteUser = (req, res, next) => {
    res.status(200).json({ status: true, payload: 'delete user' });
}