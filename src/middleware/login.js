const bcrypt = require('bcryptjs');
const {compareUser} = require('./index')


exports.compare = async (req, res, next) =>{
    try {
        // Load hash from your password DB.
    const match = bcrypt.compare(req.body.password, hashPass);
    next(); 
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}
