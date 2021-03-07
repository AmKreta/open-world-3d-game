const Router = require('express').Router();

const {
    getUserById,
    updateUser,
    deleteUser,
    createUser,
    login,
    buyItem
} = require('../controller/user/user.controller');

// api/user/auth
Router
    .route('/auth/signUp')
    .post(createUser);

Router
    .route('/auth/login')
    .post(login);

// api/user/
Router
    .route('/')
    .put(updateUser)
    .delete(deleteUser);

// api/user/Id or IdArray   
Router
    .route('/:id')
    .get(getUserById);

    
// api/user/buyItem    
Router
    .route('/buyItem')
    .post(buyItem)

module.exports = Router;    