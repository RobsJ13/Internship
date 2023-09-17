const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema({
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
        default:"admin"
    },
}
)

module.exports = mongoose.model("Admin_log",adminSchema)