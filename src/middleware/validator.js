const validator = require('validator');


exports.validate = async (req, res, next) =>{
    try {
    if(!(await validator.isEmail(req.body.email))){
        res.status(500).send({message: 'Invalid email'})
    }else{
        next();
    }
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}
