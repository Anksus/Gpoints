const express = require('express');
const router  = new express.Router();
const User = require('../model/user');
const auth = require('../middleware/auth');

//signup route
router.post('/user', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

// get user by id 
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

//about me route --- authenticated route  (future stuff)
// router.get('/user/me', auth,async (req, res) => {
   
//     res.send(req.user);
// })

//login route
router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

//logout route
router.post('/user/logout',auth, async (req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save();

        res.send();
    }catch(e){
        res.status(400).send();
    }
});



module.exports = router;