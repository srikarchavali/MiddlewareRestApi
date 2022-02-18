const {Router} = require('express');
const {addUser, listUser, compareUser, deleteUser} = require('./userControllers');
const {hashPass} = require('../middleware/index');
const { validate } = require('../middleware/validator');
const userRouter = Router(); 

//HTTP requests
userRouter.post("/user", validate, hashPass, addUser);

userRouter.get("/user", listUser);

userRouter.get("/login", compareUser);

userRouter.delete("/deleteUser", deleteUser)


module.exports = userRouter;
