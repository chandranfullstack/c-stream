const Login=require('../model/lognin')
const express = require('express');
const user = require('../model/user');
const admin =require('../model/admin');
const app = express();
const router=express.Router();
const {hashValidator}=require('../model/hash');
const {tokenGenerator}=require("../model/token");
const {auth}=require("../model/auth");






router.post("/",async(req,res)=>{

        
        try {
        const data=req.body;
        const oldUser =await user.findOne({email:data.femail});
            if(!oldUser){
                const oldAdmin =await admin.findOne({email:data.femail});
            if(!oldAdmin){
                res.send("register")
            }else{
                const checkUser = await hashValidator(req.body.fpassword,oldAdmin.password)
                if(!checkUser){
                    res.send("password is invalid")
                }else{
                    
                    res.redirect('/Adminplayer')
                }
            }
            }else{
                const checkUser = await hashValidator(req.body.fpassword,oldUser.password)
                if(!checkUser){
                    res.send("password is invalid")
                }else{
                    //  const token=await tokenGenerator(oldUser.email);
                    //  res.cookie("jwt",token);
                    //  res.send(token);
                    res.redirect('/Userplayer')
                }
            }
        } catch (error) {
         console.log(error);
        }
    
    
})
router.get("/protected",async(req,res)=>{
    res.send("i am a protected route")
})
module.exports=router;