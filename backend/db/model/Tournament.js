const mongoose  = require("mongoose");
// const bcrypt=require('bcryptjs');
// const jwt=require('jsonwebtoken')
const TournamentSchema=new mongoose.Schema({
    
    tournamentname:{type:String,
            required:true},
    tournamentplace:{type:String,
        required:true},
startDate:{type:String,
        required:true},
        selectedOption:{type:String,
        required:true},
        tournamenthost :{type:String,
        required:true},
        winner :{type:Number,
            required:true},
            Runner1 :{type:Number,
                required:true},
                Runner2 :{type:Number,
                    required:true},
   
});
module.exports= new mongoose.model("TournamentDB",TournamentSchema);