const express=require('express');
const router=express.Router();
const Creator=require('../db/model/Creator');
const Tournament=require('../db/model/Tournament');
const ResourceUser=require('../db/model/Resource');
const Participants=require('../db/model/Participant');
const Result=require('../db/model/Result');
const bcrypt=require('bcryptjs');
const cookie=require('cookie');
const jwt=require('jsonwebtoken');
const transporter=require('../middleware/Mailing');
const authenticate=require('../middleware/Authenticate');
const { findOneAndUpdate } = require('../db/model/Creator');
const random =Math.floor(Math.random()*10000);

let globalemail="";
router.get('/',(req,res)=>{
    res.send("Hi");
});
router.post('/register',async(req,res)=>{
    console.log("Hi");
    const {name,username,email,contact,password}=req.body;
    if(!name||!email||!username||!email||!contact||!password)
    {
        return res.status(400).json({message:"Please fill all details"});
    }
    try{
        const userExist=await Creator.findOne({email:email});
    if(userExist)
    {
        return res.status(422).json({message:"User already exist"});
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
        
         
        if(!pass)
        {
            console.log("Not correct password")
         res.status(400).json({message:"Invalid Credentials"});
            
        }
        else{
            const  token=await loggedin.generateAuthToken();
        console.log(token);
         res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+12000000) ,
            httpOnly:true
            
         });
            res.status(200).json({message:"Signed Successfully"});
            console.log("Signed in successfully")
        }
    }
    else{
        // const  token=await loggedin.generateAuthToken();
        // console.log(token);
        //  res.cookie("jwtoken",token,{
        //     expires:new Date(Date.now()+12000000) ,
        //     httpOnly:true
            
         
       return res.status(400).json({message:"Invalid Credentials"});
        console.log("Not Correct Email");
    }
    }
    catch(err){
        console.log(err);
    }
});
console.log(typeof authenticate);
router.post('/createtournament',async(req,res)=>{
    console.log("Hi in create");
    const {tournamentname,tournamentplace,startDate,selectedOption,tournamenthost,winner,Runner1,Runner2}=req.body;
   
    try{
  if(!tournamentname||!tournamentplace||!startDate||!selectedOption||!tournamenthost||!winner||!Runner1||!Runner2)
  {
    return res.status(422).json({message:"Plz fill all details"});
  }
    // const tournament =new Tournament({tournamentname,tournamentplace,startDate,selectedOption,tournamenthost,winner,Runner1,Runner2});
    const initid="2022";
   const initvar=0;
   
   const resource=new ResourceUser({initid,initvar});
   let resourceresult=await resource.save();
   console.log(resourceresult);
   const d=await ResourceUser.findOne({initid:"2022"});
   
//    let x="TS";
//    console.log(x);
//    x+=d.initvar;
let date=new Date();
let s=date.getFullYear().toString().substr(0,4);
console.log(s);
let x=s+"TS"+d.initvar;
 console.log(x);
    const tournament =new Tournament({TID:x,tournamentname,tournamentplace,startDate,selectedOption,tournamenthost,winner,Runner1,Runner2});
   
    let resulttournament=await tournament.save();
  
    console.log(resulttournament);
    res.send(resulttournament);
    d.initvar++;
    const f=await ResourceUser.findOneAndUpdate({initid:"2022"},{initvar:d.initvar});
    console.log(f);
    
    }
    catch(err){
        console.log(err);
    }
   
});
router.post('/individualevents/event1',async(req,res)=>{

     const curr=new Date();
     console.log(curr);
     const game= await Tournament.find({tournamentplace:"Badminton",startDate:{$gte:curr}});
    
    console.log(game);
    if(game.length>0)
    {
        res.send(game);
    }
     else{
        return res.status(422).json({message:"No upcoming Badminton events"});
    
}});
router.post('/participant',async(req,res)=>{
    console.log("Hi in Participant");
    const {Name,ID,BirthDate,Gender,TournamentID,email,Contactno}=req.body;
   
    try{
    if(!Name||!ID||!BirthDate||!Gender||!TournamentID||!email||!Contactno)
  {
    console.log("hi");
    return res.status(422).json({message:"Plz fill all details"});
   }
    

    const participant =new Participants({Name,ID,BirthDate,Gender,TournamentID,email,Contactno});
   
    let resultparticipant=await participant.save();
  var mailOptions={
    from:"help.ddusports@gmail.com",
    to: resultparticipant.email,
    subject:'Registration Info',
    text:`Thank you !!! You have Successfully Registered for ${resultparticipant.TournamentID}` 
  }
  transporter.sendMail(mailOptions,(err,info)=>{
    if(err)
    {
        return console.log(err);
    }
    console.log(`Message Sent ${info.messageId}`);
  });
    console.log(resultparticipant);
    res.send(resultparticipant);
   
    
    }
    catch(err){
        console.log(err);
    }
   
});
router.post('/adminpanel',authenticate,async(req,res)=>{
    console.log(
        "In adminpanel"
    )
    const game= await Tournament.find();
    if(game.length>0)
    {
        res.status(200).send(game);
    }
     else{
         return res.status(422).json({message:"No upcoming events"});
     }
});
router.post('/forget',async(req,res)=>{
    const{email}=req.body;
    globalemail=email;
    console.log(globalemail);
    const result=await Creator.findOne({email:email});
    
    if(result)
    {
        console.log(random);
        var mailOptions={
            from:"help.ddusports@gmail.com",
            to: result.email,
            subject:'Forget Password',
            text:`Your OTP for reseting password is ${random} ` 
          }
          transporter.sendMail(mailOptions,(err,info)=>{
            if(err)
            {
                return console.log(err);
            }
            console.log(`Message Sent ${info.messageId}`);
          });
            console.log(result);
            res.send(result);
    }
    else
    {
        res.status(400).json({message:"Invalid Credentials"});
    }
});
router.post('/otp',async(req,res)=>{
    const{otp}=req.body;
    console.log(otp);
    console.log(random);
    if(otp==random)
    {
        
        console.log("matched");
        res.send(otp);
    }
    else
    {
        return res.status(400).json({message:"Invalid OTP"});
    }
    
});
router.post('/resetpassword',async(req,res)=>{
    const{password,confirmpassword}=req.body;
    console.log(password);
    console.log(confirmpassword);
    console.log(globalemail);
    if(password===confirmpassword)
    {
        const passw=await bcrypt.hash(password,12);
        console.log(passw)
        const result= await  Creator.findOneAndUpdate({email:globalemail},{$set:{password:passw}});
        console.log(result);
        res.send(result);
    }
    else
    {
        return res.status(400).json({message:"Error:Both Fields must be same"});
    }
    
});
router.post('/logout',async(req,res)=>{
    res.clearCookie("jwtoken",{path:"/"});
    res.status(200).json({message:"Logout Successfully"});
})
router.get(`/user/:id`,async (req, res) => {
    console.log("Hi in edituser");
    const id=req.params.id;
    const result=await Tournament.findOne({TID:id});
    console.log(result);
    res.send(result);
    console.log(id);
    // other code to edit the user and send a response back to the client
});
router.post('/createtournament/edit',async(req,res)=>{
    console.log("Hi in edit and upadate");
    const {tournamentname,tournamentplace,startDate,selectedOption,tournamenthost,winner,Runner1,Runner2}=req.body;
   
    try{
  if(!tournamentname||!tournamentplace||!startDate||!selectedOption||!tournamenthost||!winner||!Runner1||!Runner2)
  {
    return res.status(422).json({message:"Plz fill all details"});
  }
    // const tournament =new Tournament({tournamentname,tournamentplace,startDate,selectedOption,tournamenthost,winner,Runner1,Runner2});
    
  const result=await Tournament.findOneAndUpdate({tournamentname:tournamentname},{tournamentplace:tournamentplace,startDate:startDate,selectedOption:selectedOption,tournamenthost:tournamenthost,winner:winner,Runner1:Runner1,Runner2:Runner2})
console.log(result);
res.status(200).json({message:"Updated Successfully"});
    
    }
    catch(err){
        console.log(err);
    }
   
});
router.get(`/user/delete/:id`,async (req, res) => {
    console.log("Hi in delete");
    const id=req.params.id;
    console.log(id);
    const result=await Tournament.deleteOne({TID:id});
    console.log(result);
   res.status(200).json({message:"Deleted Successfully"})
    // other code to edit the user and send a response back to the client
});
router.post('/posttournamentname',async(req,res)=>{
    console.log(
        "In posttournament name"
    )
    const game= await Tournament.find();
    console.log(game);
    if(game.length>0)
    {
        res.status(200).send(game);
    }
     else{
         return res.status(422).json({message:"No upcoming events"});
     }
});
router.post('/postparticipant',async(req,res)=>{
    console.log(
        "In postparticipant"
    )
    const participant= await Participants.find();
    console.log("Displaying Participants")
    console.log(participant);
    if(participant.length>0)
    {
        res.status(200).send(participant);
    }
     else{
         return res.status(422).json({message:"No upcoming events"});
     }
});
router.post('/result',async(req,res)=>{
    console.log("Hi in Result");
    console.log(req.body);
    const {sport,selectedTournament,selectedWinner,selectedRunner1,selectedRunner2}=req.body;
    console.log(sport);
    console.log(selectedTournament);
    console.log(selectedWinner);
    console.log(selectedRunner1);
    console.log(selectedRunner2);
    if(!sport||!selectedTournament||!selectedWinner||!selectedRunner1||!selectedRunner2)
    {
        console.log("Checking");
        return res.status(400).json({message:"Please fill all details"});
    }
   
    
    
    const result =new Result({sport,selectedTournament,selectedWinner,selectedRunner1,selectedRunner2});
   
    let results=await result.save();
    console.log(results);
    res.send(results);

    
    
   
});
router.post('/individualevents/event1/result',async(req,res)=>{

    const curr=new Date();
    console.log(curr);
    const game= await Result.find({sport:"Badminton"});
   
   console.log(game);
   if(game.length>0)
   {
       res.send(game);
   }
    else{
       return res.status(422).json({message:"No upcoming Badminton events"});
   
}});
module.exports=router;
