const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    user_name:{
        type: String,
        required:true
    },
    pwd:{
        type:String,
        required: true
    },
    role:{
        type:String,
        default:"user"
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
}
)

module.exports = mongoose.model("Users_log",userSchema)