const Router = require('express').Router();
const gameAssets = require('../gameAssets/gameAssets');
const userRouter = require('./user.route');

//@method get 
//@access public
//@url  /api/getGameAssets
Router
    .route('/getGameAssets')
    .get((req, res, next) => {
        res.status(200).json({ sucess: true, payload: gameAssets });
    });

Router.use('/user', userRouter);


module.exports = Router;