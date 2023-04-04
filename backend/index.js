const express=require("express");
 const cors=require("cors");
 const cookieparser=require("cookie-parser");
const app=express();

const Creator=require("./db/model/Creator");

const dotenv=require("dotenv");
dotenv.config({path: './confg.env'});
require("./db/config")
app.use(express.json())
app.use(cookieparser());
app.use(cors());
app.use(require('./router/auth'));

 
 


app.listen(8080);
    
