const mongoose = require('mongoose');
const validator=require('validator')




const LoginSchema=mongoose.Schema({
    email:{type:String,unique:true,match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    validate:[validator.isEmail,'Enter a valid  email address']
     ,required:[true,"email is required"]
},
    password:{type:String,minLength:8,maxLength:[8,"the password should be 8 "],
    required:[true,"password is required"]
},
    
})
const login = mongoose.model("login",LoginSchema)







module.exports=login;