const express = require('express');
const router = express.Router();
const Points = require('../model/points');
const auth = require('../middleware/auth');

// fetching points of authenticated person
router.get('/points/:id', auth, async (req,res)=>{
   

    try{
        const user = await Points.findOne({owner:req.user._id})

        ///     alternate way to find data!!
       // console.log(req.user._id);
       // await user.populate('points').execPopulate()
        res.send(user);

    }catch(e){
            res.status(400).send(e);
    } 
    })


// storing points of authenticated person
router.post('/points', auth, async (req,res)=>{

    const pointss = new Points({
        ...req.body,
        owner: req.user._id
    })

    try{
        await pointss.save();
        res.status(200).send(pointss);
    }catch(e){
        res.status(400).send();
    }
 
});

// router.post('/points/:id', async (req,res)=>{

//     try{
//         const savedata = await Points.create(req.body);
//         res.send(savedata);
//     }catch(e){
//         res.status(400).send();
//     }
 
// });


module.exports = router;