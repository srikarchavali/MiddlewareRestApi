const User = require('./userModel');
const bcrypt = require('bcryptjs');
const Movies = require('../movies/movieModel')
exports.addUser = async (req, res)=>{
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            movies: await Movies.findOne({username: `${req.body.username}`})
        });
        console.log(this.movies)
        res.status(200).send({user: newUser});
    } catch (error) {
        console.log(error)
        res.status(500).send({ err: error.message });
    }
}

exports.listUser = async (req, res) => {
    try {
        // const userList = await User.find({username: `${req.body.username}`});
        const userList = await User.find({});
        const movies = await Movies.find({username: `${req.body.username}`})
        // const userRatings = await User.find({username: `${req.body.username}`}).populate({
        //     path: 'User.movies', 
        //     strictPopulate: false,
        //     select: `${movies.title}`
        // })
        res.status(200).send({
            users: userList,
            movies: movies,
            // userRatings: userRatings
        });
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}

exports.compareUser = async (req, res) => {
    try {
        const userList = await User.findOne({username: req.body.username});
        if(!userList){
            res.status(404).send({ err: "No user found" });
        }else{
            // Load hash from your password DB.
            const match = await bcrypt.compare(req.body.password, userList.password); 
            if(match){
                res.status(200).send({message: "login successfull"}); 
            }else{
                res.send({message: "login failed"})
            }
        }
    }catch (error) {
        res.status(500).send({ err: error.message });
    }
}

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const result = await User.deleteOne({username: req.body.username});
        if(result){
            res.status(200).send({message: `${req.body.username} deleted successfully`});
        } else{
            res.status(500).send({message: `${req.body.username} not found`});
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
}