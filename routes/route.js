const express = require('express');


const userController = require('../cntrl/user');
const loginController = require('../cntrl/login-ctrl');

const router = express.Router();

// User apis
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.post('/login', loginController.login);



module.exports = router;
