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
});
router.post('/register', async (req,res)=>{
    // res.status(200).send("Hello");
    const newUser = { username: req.body.username, password: getHashedPassword(req.body.password) };
    console.log(newUser);
    res.send(newUser);
    res.status(200);
})

module.exports = router;