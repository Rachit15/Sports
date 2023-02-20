const jwt=require("jsonwebtoken");
const Creator=require("../db/model/Creator")
const Authenticate=async(req,res,next)=>{
    try{
        const token=req.cookies.jwtoken;
        const verifyToken=jwt.verify(token,process.env.SECRET_kEY);
        const creators=await Creator.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!creators){throw new Error('User not found');}
        req.token=token;
        req.creators=creators;
        req.creatorID=creator._id;
        next();
        }
    catch(err)
    {
        res.status(401).send('Unauthorized:No token Provided')
        console.log("Not authenticated");
    }

}
module.exports=Authenticate;