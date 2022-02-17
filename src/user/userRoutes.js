const {Router} = require('express');
const {addUser, listUser, compareUser, deleteOne} = require('./userControllers');
const {hashPass} = require('../middleware/index');
const { validate } = require('../middleware/validator');
const userRouter = Router(); 

//HTTP requests
userRouter.post("/user", validate, hashPass, addUser);

userRouter.get("/user", listUser);

userRouter.get("/login", compareUser);

userRouter.delete("/delete", deleteOne)


module.exports = userRouter;
