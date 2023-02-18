const mongoose  = require("mongoose");
// const bcrypt=require('bcryptjs');
// const jwt=require('jsonwebtoken')
const ParticipantSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    ID:{type:String,
            required:true},
BirthDate:{type:String,
        required:true},
Gender:{type:String,
        required:true},
    TournamentID:{type:String,
        required:true},
        email :{type:String,
        required:true},
        Contactno :{type:Number,
            required:true},
            
   
});
module.exports= new mongoose.model("ParticipantDB",ParticipantSchema);