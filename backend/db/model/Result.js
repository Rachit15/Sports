const mongoose  = require("mongoose");
// const bcrypt=require('bcryptjs');
// const jwt=require('jsonwebtoken')
const ResultSchema=new mongoose.Schema({
    sport:{
        type:String,
        required:true
    },
    selectedTournament:{
        type:String,
        required:true
    },
    selectedWinner:{type:String,
            required:true},
selectedRunner1:{type:String,
        required:true},
selectedRunner2:{type:String,
        required:true}
   
            
   
});
module.exports= new mongoose.model("ResultDB",ResultSchema);