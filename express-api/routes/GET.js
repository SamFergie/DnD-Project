const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Monster = require('../models/Monster');

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
    User.findOne( { username: req.params.username } )
        .then((data) => {
            if(data){
                res.status(200).send(data)
            }else{
                res.status(404).send({err : "data not found"})
            }
        })
        .catch((err) => res.status(500).send(err))
})

router.get('/MonstersByName/:username', async (req,res)=>{
    console.log("Find By Owner");
    Monster.find( { owner: req.params.username } )
        .then((data) => {
            if(data.length != 0){
                res.status(200).send(data)
            }else{
                res.status(404).send({err : "data not found"})
            }
        })
        .catch((err) => res.status(500).send(err))
})

router.get('/MonstersById/:id', async (req,res)=>{
    console.log("Find By Id");
    Monster.find( { _id: req.params.id } )
        .then((data) => {
            if(data.length != 0){
                res.status(200).send(data)
            }else{
                res.status(404).send({err : "data not found"})
            }
        })
        .catch((err) => res.status(500).send(err))
})



module.exports = router;