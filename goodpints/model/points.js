const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodPoints = new Schema({


    MSD : {
        type: Number,
        default : 0
    },
    DRfund : {
        type: Number,
        default : 0
    },
    TDperson : {
        type: Number,
        default : 0
    },
    Vonline : {
        type: Number,
        default : 0
    },
    Dblood : {
        type: Number,
        default : 0
    },
    DEitems : {
        type: Number,
        default : 0
    },
    VCDrelief : {
        type: Number,
        default : 0
    },
    HCD19tf : {
        type: Number,
        default : 0
    },
    anythingElse : {
        type: String,
        default : 'nothing',
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }

    
    
    
})

module.exports = Points = mongoose.model('point',GoodPoints);


