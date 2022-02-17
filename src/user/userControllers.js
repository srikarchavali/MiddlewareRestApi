const User = require('./userModel');
const bcrypt = require('bcryptjs');

exports.addUser = async (req, res)=>{
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({user: newUser});
    } catch (error) {
        console.log(error)
        res.status(500).send({ err: error.message });
    }
}

exports.listUser = async (req, res) => {
    try {
        const userList = await User.find({});
        res.status(200).send({users: userList});
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
exports.deleteOne = async (req, res) => {
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