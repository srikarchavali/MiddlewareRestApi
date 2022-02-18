require("./db/connection");
const express = require('express');
const movieRouter = require("./movies/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5001;

app.use(express.json());

app.use(userRouter);
app.use(movieRouter)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})