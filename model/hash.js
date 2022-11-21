const bycrypt = require("bcrypt");
const saltRounds = 10;


const hashGenerate = async (plainPassword)=>{
    const slat = await bycrypt.genSalt(saltRounds);
    const hash = await bycrypt.hash(plainPassword,slat);
    return hash;
}
const hashValidator= async(plainPassword,hashedPassword)=>{
    const result = await bycrypt.compare(plainPassword,hashedPassword);
    return result;
}

module.exports.hashGenerate=hashGenerate;
module.exports.hashValidator=hashValidator;