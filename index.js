const express=require("express");

const app=express();

app.get('/home',(req,res)=>{
    res.json({note:"welcome to express"})
})
app.listen(8000,()=>{
    console.log('server started');
})