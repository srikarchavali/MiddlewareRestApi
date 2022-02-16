const bcrypt = require('bcryptjs');

exports.hashPass = async (req, res, next) =>{
    try {
        // const tempPass = req.body.password;
        // const hashedPass = bcrypt.hash(tempPass, 8);
        // req.body.pass = hashedPass;
        hashedPass = await bcrypt.hash(req.body.password, 8);
        req.body.password = hashedPass;
        next();
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}