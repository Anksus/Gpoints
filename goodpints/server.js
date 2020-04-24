const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var admin = require('firebase-admin');

//express app
const app = express();



//connecting to database usning mongoose
mongoose.connect('mongodb://localhost/UserPoints',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
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




// listening to ports
const port = process.env.port || 4000;
app.listen(port, () =>{
    console.log('we are listening to' +port );
});


