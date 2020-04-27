const express = require('express');
const router = express.Router();
const Points = require('../model/points');


router.get('/points:id', async (req,res)=>{
   

    try{
        const getpoints =  await Points.findById({_id: req.params.id},req.body);
        

        if (!getpoints) {
            return res.status(404).send();
        }
        res.send(getpoints);

    }catch(e){
            res.status(400).send(e);
    } 
    })

router.post('/points', async (req,res)=>{

    try{
        const savedata = await Points.create(req.body);
        res.send(savedata);
    }catch(e){
        res.status(400).send();
    }
 
});

router.post('/points/:id', async (req,res)=>{

    try{
        const savedata = await Points.create(req.body);
        res.send(savedata);
    }catch(e){
        res.status(400).send();
    }
 
});


module.exports = router;