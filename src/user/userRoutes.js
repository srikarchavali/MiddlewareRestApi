const {Router} = require('express');
const {addUser, listUser, compareUser} = require('./userControllers');
const {hashPass} = require('../middleware/index');
// const {compare} = require('../middleware/login');
const userRouter = Router(); 

//HTTP requests
userRouter.post("/user", hashPass, addUser);

userRouter.get("/user", listUser);

userRouter.get("/login", compareUser);


module.exports = userRouter;
