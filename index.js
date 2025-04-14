import express from "express"
import PORT from "./port.js"

const app=express();

app.get('/',(req,res)=>{
    res.send("Hello BU.....\n");
})

app.listen(PORT,(req,res)=>{
    console.log(`\nServer is running on http://localhost:${PORT}\n`);
})