const express=require('express');
const userController=require("./userContriller")
const validationMiddleware=require("../utils/validationMiddleware")


const router=express.Router();

router.get('/user',
    userController.getAllUsers);

router.get('/user/:id',
    validationMiddleware.id,
    userController.getUserById);

router.post('/user',
    validationMiddleware.body,
    validationMiddleware.email,
    userController.createUser);

router.delete('/user/:id',
    validationMiddleware.id,
    userController.deleteUser);

router.post('/user/:id',
    validationMiddleware.id,
    validationMiddleware.email,
    userController.updateUser);

module.exports=router;