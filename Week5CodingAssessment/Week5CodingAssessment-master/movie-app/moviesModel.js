let mongoose = require('mongoose')

const moviesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    desc:{
        type:String
    },
    genre:{
        type:String
    },
    stars:{
        type:String
    }
})
module.exports = mongoose.model('Movie',moviesSchema);