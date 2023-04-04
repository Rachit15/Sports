const mongoose  = require("mongoose");

const ResourceSchema=new mongoose.Schema({
    initid:{type:String,
            required:true},
   
        initvar :{type:Number,
            required:true},
            
   
});
module.exports= new mongoose.model("Resource",ResourceSchema);