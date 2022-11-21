const jwt = require('jsonwebtoken');

const tokenGenerator =(email)=>{
    const token=jwt.sign(
        {email},process.env.jwt_key,{expiresIn:"3hours"}
        );
       return token;
    }
    const tokenValidator =(token)=>{
        try {
            const data = jwt.verify(token,process.env.jwt_key);
            return data;
        } catch (error) {
            return false;
        }
    }

    module.exports.tokenGenerator=tokenGenerator;
    module.exports.tokenValidator=tokenValidator;
