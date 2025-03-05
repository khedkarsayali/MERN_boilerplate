const express=require("express");
const app =express();
const mongoose = require("mongoose");
const path=require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const session =require("express-session");
const flash=require("connect-flash");



main()
    .then(() =>{
        console.log("connection sucessful");
    })
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect(MONGO_URL);

}


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",(req,res)=>{
    res.send("Welcome");
});


app.listen(8080,()=>{

    console.log("Server started");
})