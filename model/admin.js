const mongoose = require('mongoose')
const bycrypt = require('bcrypt');
const validator = require('validator');
const salt =10;


const AdminScehma=mongoose.Schema({
    name:{type:String,
        required:[true,"Enter a Username"],
        validate:[validator.isAlphanumeric,"user name contains only letter and numbers"]
    },
    email:{type:String,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      unique:true,required:true,validate:[validator.isEmail,"enter a valid email adress"]
    },
    password:{type:String,required:true,minLength:[4,"password minimum 4 digits"]},
    phonenumber:{type:Number, min:[10,"enter correct number"]},
});


const admin=mongoose.model("admin",AdminScehma);


module.exports=admin;