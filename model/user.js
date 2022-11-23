const mongoose = require('mongoose')
const bycrypt = require('bcrypt');
const validator = require('validator');
const {hashGenerate} = require("./hash");



const UserScehma=mongoose.Schema({
    name:{type:String,
    required:[true,"name is required"],unique:true,
    validate:[validator.isAlphanumeric,'user name contains letters and numbers only']
    },
    email:{type:String,match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    unique:true,required:true,validate:[validator.isEmail,"enter a valid email adress"]
},
    password:{type:String,
        minLength:[4,"password minimum 4 digits"]
    },
    phonenumber:{type:Number,},
});

const user=mongoose.model("user",UserScehma);


module.exports=user;