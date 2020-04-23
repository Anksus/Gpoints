const express = require('express');
const router = express.Router();
const Points = require('../model/points');

router.get('/:id',function(req,res,next){
    //res.send('we are in');
    Points.findById({_id: req.params.id},req.body).then(function(point){
        res.send(point);
    })

})


router.post('/',function(req,res,next){
    Points.create(req.body).then(function(point){
        
        res.send(point);
    }).catch(next);
});


module.exports = router;