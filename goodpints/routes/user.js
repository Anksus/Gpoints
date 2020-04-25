const express = require('express');
const router  =  express.Router();
const User = require('../model/user');

router.post('/user', async (req,res)=>{
    const user = new User(req.body);

    try{
        await user.save();
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
        console.log('we wrein side of cre')
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
})



module.exports = router;