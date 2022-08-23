const userRoutes = require('express').Router();
const { UserController } = require('../controllers');

userRoutes.get('/',UserController.getUser)
userRoutes.post('/create',UserController.createUser)
userRoutes.post('/update/:id',UserController.updateUser)
userRoutes.get('/delete/:id',UserController.deleteUser)

module.exports = userRoutes;
