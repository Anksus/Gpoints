const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var admin = require('firebase-admin');

//express app
const app = express();



//connecting to database
mongoose.connect('mongodb://localhost/UserPoints')
mongoose.Promise = global.Promise;

//connecting to firebase for auth
// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: 'mongodb://localhost/UserPoints'
    
//   });

//using middleware to load data in json format.
app.use(bodyParser.json());

//using middleware to use API.
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
        console.log(err);
        res.status(422).send({error: err.message});
});


// listening to ports
app.listen(process.env.port || 4000, function(){
    console.log('we are listening; port 4000');
});


