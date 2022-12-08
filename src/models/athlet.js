const mongoose = require("mongoose")

const athletSchema = new mongoose.Schema({
    event : { 
        type : String,
        default : "Mem's 100m"
    }, 
    rank : {
        type : Number,
        required : true,
        unique : true,
    },
    score : { 
        type : Number,
        required : true,
    },
    eventDate : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
        trim: true
    },
    birthDate : {
        type : String,
        required : true,
    },
    venue : {
        type : String, 
        required : true,
    },
    country : {
        type : String, 
        required : true,
    },
})

const athletRanking = new mongoose.model("athletRanking", athletSchema)

module.exports = athletRanking