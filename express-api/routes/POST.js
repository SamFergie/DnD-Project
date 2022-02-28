const express = require('express');
const {spawn} = require('child_process');
const router = express.Router();
const User = require('../models/User');
const Monster = require('../models/Monster');

const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

//Obtain the user with the specified username and password
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
router.post('/predictCR', async(req,res)=>{
    try{
        console.log("Adding Monster");
        var mlData = [
            req.body.hp,
            req.body.ac,
            req.body.base_speed,
            req.body.fly_speed,
            req.body.burrow_speed,
            req.body.swim_speed,
            req.body.climb_speed,
            req.body.STR,
            req.body.DEX,
            req.body.CON,
            req.body.INT,
            req.body.WIS,
            req.body.CHA,
            req.body.passive_number,
            req.body.action_number,
            req.body.max_damage,
            req.body.max_bonus,
            req.body.legendary_number,
            req.body.immunity_number,
            req.body.resistance_number
        ];
        const python = spawn('python', ['MLCaller.py', ...mlData]);
        var outputData = "";
        python.stdout.on("data", (data) => {
            console.log("Success:", data.toString());
            outputData = data.toString();
            res.status(200);
        });
        python.stderr.on("data", (data) => {
            console.log("Failure:", data.toString());
            outputData = data.toString();
            res.status(404);
        });
        python.on('close', (code) => {
            console.log("Close Stream", code);
            console.log(outputData);
            res.json(outputData);
            res.send();
        });

    }catch(err){
        // An error occured
        res.status(500).send(err);
    }
})


router.post('/addMonster', async (req,res)=>{
    try{
        const monster = new Monster({
            owner: req.body.owner,
            name: req.body.name,
            predicted_cr: req.body.predicted_cr,
            hp: req.body.hp,
            ac: req.body.ac,
            base_speed: req.body.base_speed,
            fly_speed: req.body.fly_speed,
            burrow_speed: req.body.burrow_speed,
            swim_speed: req.body.swim_speed,
            climb_speed: req.body.climb_speed,
            STR: req.body.STR,
            DEX: req.body.DEX,
            CON: req.body.CON,
            INT: req.body.INT,
            WIS: req.body.WIS,
            CHA: req.body.CHA,
            passive_number: req.body.passive_number,
            action_number: req.body.action_number,
            max_damage: req.body.max_damage,
            max_bonus: req.body.max_bonus,
            legendary_number: req.body.legendary_number,
            immunity_number: req.body.immunity_number,
            resistance_number: req.body.resistance_number,
        });
        const savedMonster = await monster.save();
        res.json(savedMonster);
        res.status(200);
    }catch(err){
        // An error occured
        res.status(500).send(err);
    }
})

module.exports = router;