const express = require('express');
const router = express.Router();
const User = require('../models/User');


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

module.exports = router;