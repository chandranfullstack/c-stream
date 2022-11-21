const tokenValidator=require('./token');

module.exports=async function(req,res,next) {
    const {jwt}=req.cookie;
    const valid =await tokenValidator(jwt);
    if(valid){
        next();
    }else{
        res.send("access denied")
    }
}