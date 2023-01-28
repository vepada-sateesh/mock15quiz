const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    name: { type: String },
    category: { type: Number },
    difficulty: { type: String },
    questions: { type: Number },
    score:{type:Number}
    
})

const userModel = mongoose.model("Userlist", userSchema)
module.exports = {userModel}