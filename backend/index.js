const express=require("express");
const app=express();
require("./db/config");
app.get('/',(req,res)=>{
    res.send("Welcome To Sports ");
})

app.listen(8080);