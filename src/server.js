require("./db/connection");
const express = require('express');
const cors = require('cors');
const movieRouter = require("./movies/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(movieRouter);

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})