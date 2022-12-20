const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://RachitModi:mhr2oAbXURk2oOpU@cluster0.pqgpjgg.mongodb.net/Local_Sports?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connection successfull");
}).catch((error)=>{
    console.log(error);
});