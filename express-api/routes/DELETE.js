const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Monster = require('../models/Monster');


router.delete('/deleteUser/:username', async (req,res)=>{
    try{
        const removeEvent = await User.deleteOne( { username: req.params.username } )
        if(removeEvent.deletedCount == 0){
            res.status(404).send("Could not find user to delete");
        }else{
            res.json(removeEvent);
            res.status(200);
        }
}catch(err){
        res.status(404).send("Could not find user to delete");
    }
})
router.delete('/deleteMonster/:id', async (req,res)=>{
    try{
        const removeEvent = await Monster.findByIdAndDelete( { id: req.params.id } )
        if(removeEvent.deletedCount == 0){
            res.status(404).send("Could not find monster to delete");
        }else{
            res.json(removeEvent);
            res.status(200);
        }
}catch(err){
        res.status(404).send("Could not find monster to delete");
    }
})


module.exports = router;