const mongoose = require("mongoose");

const schema = mongoose.Schema({
    first_name:String,
    last_name:String , 
    email :String ,
    age :Number,
    password:String
})

const userModel = mongoose.model("user",schema);

module.exports = userModel