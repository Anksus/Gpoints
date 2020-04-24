const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodPoints = new Schema({

    // GPoints : [

    // {   task : { type: String},
    //     amount : { type: Number, default: 0}
    // },
    // {   task : { type: String},
    //     amount : { type: Number, default: 0}
    // },
    // {   task : { type: String},
    //     amount : { type: Number, default: 0}
    // },
    // {   task : { type: String},
    //     amount : { type: Number, default: 0}
    // },
    // {   task : { type: String},
    //     amount : { type: Number, default: 0}
    // },
    // {   task : { type: String},
    //     amount : { type: Number, default: 0}
    // },
    // {   task : { type: String},
    //     amount : { type: Number, default: 0}
    // },
    // {   task : { type: String},
    //     amount : { type: Number, default: 0}
    // },
    // {
    //     tell:  {type: String,default : 'nothing'} 
        
    // }
    // ]




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

    
    
    
})

module.exports = Points = mongoose.model('point',GoodPoints);


