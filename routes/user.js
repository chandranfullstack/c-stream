const user =require('../model/user');
const express=require("express")
const app =express();
const router=express.Router();
const {hashGenerate} = require("../model/hash");


router.post("/",async(req,res)=>{
    const data=req.body
    const hashPassword=await hashGenerate(data.password);
    const User=new user({
        name:data.name,
        email:data.email,
        password:hashPassword,
        phonenumber:data.phonenumber
    })
    await User.save().then(()=>console.log("saved"),res.send(data))
    .catch((err) =>console.log(err))
})

module.exports=router;

