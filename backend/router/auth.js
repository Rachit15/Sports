const express=require('express');
const router=express.Router();
const Creator=require('../db/model/Creator')
router.get('/',(rew,res)=>{
    res.send("Hi");
});
router.post('/register',async(req,res)=>{
    console.log("Hi");
    const {name,username,email,contact,password}=req.body;
    const creator =new Creator({name,username,email,contact,password});
    let result=await creator.save();
    console.log(result);
    res.send(result);
});

module.exports=router;