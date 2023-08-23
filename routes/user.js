const express = require('express');
const userController = require('../controllers/user.js');


const router = express.Router();

router.post('/', userController.createUsers);
router.post('/login', userController.loginUser);
router.put('/change-password', userController.changePassword);
router.delete('/delete', userController.deleteUser);





module.exports= router  