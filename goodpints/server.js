const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var admin = require('firebase-admin');
const UserRouter = require('./routes/user');
const PointsRouter = require('./routes/pointsAPI');

//express app
const app = express();



//connecting to database usning mongoose
mongoose.connect('mongodb://localhost/UserPoints',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})



//using middleware to load data in json format.
app.use(bodyParser.json());
app.use(express.json());

//using middleware to use API.
app.use('api',PointsRouter);
app.use(UserRouter);




// listening to ports
const port = process.env.port || 4000;
app.listen(port, () =>{
    console.log('we are listening to' +port );
});


