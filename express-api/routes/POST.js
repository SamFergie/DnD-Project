const express = require('express');
const router = express.Router();
const User = require('../models/User');

const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

//Obtain all the users in the collection
router.post('/login', async (req,res)=>{
    try{
        User.findOne( { username: req.body.username, password: getHashedPassword(req.body.password) } )
        .then((data) => {
            if(data){
                res.status(200).send(data)
            }else{
                res.status(404).send({err : "data not found"})
            }
        })
    }catch(err){
        res.status(404).send({err : "data not found"})
    }
});
router.post('/register', async (req,res)=>{
    try{
        const user = new User({
            username: req.body.username,
            password: getHashedPassword(req.body.password)
        });
        const savedUser = await user.save();
        res.json(savedUser);
        res.status(200);
    }catch(err){
        res.status(409).send("Username is already in use");
    }
})

module.exports = router;