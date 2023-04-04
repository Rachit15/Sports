const mongoose  = require("mongoose");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const CreatorSchema=new mongoose.Schema({
    
    name:{type:String,
            required:true},
    username:{type:String,
        required:true},
    email:{type:String,
        required:true},
    contact:{type:String,
        required:true},
    password:{type:String,
        required:true},
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});
CreatorSchema.pre('save',async function(next){
    console.log("How");
    if(this.isModified('password'))
    {
        this.password=await bcrypt.hash(this.password,12);
    }
    next();
});
CreatorSchema.methods.generateAuthToken=async function()
{
    try{
        let token=jwt.sign({_id:this._id},process.env.SECRET_kEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}

module.exports= mongoose.model("SignUp",CreatorSchema);