const { request } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs")

module.exports.getAllUsers =async (req,res,next)=>{
    let users;
    try{
        users=await User.find()
    }catch (err){
        return next(err)
    }

    if(!users)
    {
        return res.status(500).json({message:"Error occured."})
    }

    return  res.status(200).json({users})
}

module.exports.signup =async(req,res,next)=>{
    try {
        //let data=req.body;
        let {user_name,pwd,role,email}=req.body;
        new_pwd=bcrypt.hashSync(pwd)
        user=new User({user_name,pwd:new_pwd,role,email})
        user.save()
        //User.create(data)
        res.send("success")
    } catch (error) {
        return next(error)
    }
}

module.exports.updateUser=async (req,res,next)=>{
    try {
        const id=req.params.id;
        let {user_name,pwd,role,email}=req.body;
        new_pwd=bcrypt.hashSync(pwd)
        await User.findByIdAndUpdate(id,{user_name,pwd:new_pwd,role,email})
        //User.create(data)
        res.send("Updated")
    } catch (error) {
        return next(error)
        
    }
}


module.exports.deleteUser =async(req,res,next)=>{
    const id=req.params.id;
    console.log(id)
    let user;
    try {
        user= await User.findByIdAndRemove(id);
        
    } catch (error) {
        return next(error)
    }
    if(!user)
    {
        return res.status(500).json({message:"No such user"})
    }
    res.send("Deleted Successfully.") 
}

module.exports.login =async(req,res,next)=>{
    let {user_name,pwd}=req.body;
    let existing_user;
    try {
        existing_user=await User.findOne({user_name});

  
    } catch (error) {
        return next(error)
    }

    if(!existing_user)
    {
        return res.status(500).json({message:"Invalid Username or Password"})
    }

    const isPwdCrct=bcrypt.compareSync(pwd,existing_user.pwd)
    if(!isPwdCrct)
    {
        return res.status(500).json({message:"Invalid Username or Password"}) 
    }
    //res.send("Login Successful")
    return res.status(200).json({message:"Login Successful"}) 
}