const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

module.exports = router;


//Obtain all the users in the collection
router.get('/Users', async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message:err});
    }
});
router.get('/Users/:username', async (req,res)=>{
    try{
        const users = await User.findOne( { username: req.params.username } );
        if(users == null){
            res.status(404);
        }
        res.json(users);
    }catch(err){
        res.json({message:err});
    }
});