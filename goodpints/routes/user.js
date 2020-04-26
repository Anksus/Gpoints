const express = require('express');
const router  =  express.Router();
const User = require('../model/user');
const auth = require('../middleware/auth');


router.post('/user', async (req,res)=>{
    const user = new User(req.body);

    try{
       
        
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send(user);

    }catch(e){
        res.status(500).send(e);
    }
})

router.get('/user/:id', async (req,res)=>{
    const _id = req.params.id;

    try{
     const user = await User.findById(_id);
     if (!user) {
         return res.status(404).send();
     }
     res.send(user);
    }catch(e){
        res.status(500).send();
    }
})

router.post('/user/login', async (req, res) => {
    console.log('we are in ')
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user,token})
    } catch (e) {
        res.status(400).send()
    }
})



module.exports = router;