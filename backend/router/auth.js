const express=require('express');
const router=express.Router();
const Creator=require('../db/model/Creator')
const bcrypt=require('bcryptjs')
const cookie=require('cookie');
const jwt=require('jsonwebtoken');

router.get('/',(rew,res)=>{
    res.send("Hi");
});
router.post('/register',async(req,res)=>{
    console.log("Hi");
    const {name,username,email,contact,password}=req.body;
    if(!name||!email||!username||!email||!contact||!password)
    {
        return res.status(422).json({error:"Please fill all details"});
    }
    try{
        const userExist=await Creator.findOne({email:email});
    if(userExist)
    {
        return res.status(422).json({error:"User already exist"});
    }
    const creator =new Creator({name,username,email,contact,password});
   console.log(creator.password);
    let result=await creator.save();
    console.log(result);
    res.send(result);

    }
    catch(err){
        console.log(err);
    }
   
});
router.post('/arrange',async(req,res)=>
{ 
    console.log("Kevu che");
    
    
    try{
    const {email,password}=req.body;
    if(!email||!password)
    {
        return res.status(422).json({error:"Please fill all details"});
    }
    
    const loggedin=await Creator.findOne({email:email});
    console.log(loggedin);
    if(loggedin)
    {
         const pass=await bcrypt.compare(password,loggedin.password);
        const  token=await loggedin.generateAuthToken();
        console.log(token);
         res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+12000) 
         })
         console.log(token);
        if(!pass)
        {
            res.json({message:"Invalid Credentials"});
            console.log("Not correct password")
        }
        else{
            res.json({message:"Signed Successfully"});
            console.log("Signed in successfully")
        }
    }
    else{
        res.status(422).json({error:"Invalid Credentials"});
        console.log("Not Correct Email");
    }
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;