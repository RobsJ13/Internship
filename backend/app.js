const express =require("express");
const mongoose=require("mongoose")
const dotenv=require("dotenv");
const userRouter = require("./routes/user_routes");

const app=express();    
dotenv.config()

const PORT=process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//middleware

app.use("/users", userRouter)


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to mongo db"))
.catch((err)=> console.log("error in connection"))





app.listen(PORT,()=>{
    console.log(`connected to serer at Port ${PORT}`);
});