
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const feedSchema =  mongoose.Schema({
    userId: {
        type:String
    },
    title: {
        type:String,
        maxlength:50,
    },
    description: {
        type: String,
    },
    // filePath : {
    //     type: String,
    // },
    category: String,
    
    views : {
        type: Number,
        default: 0 
    },
    
    image:{
        type:String
    }
}, { timestamps: true }) //timestamps 시간 


const Feed = mongoose.model('Feed', feedSchema);
module.exports = Feed;