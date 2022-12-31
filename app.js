const express=require('express')
const app=express()

app.get('/',function(req,res){
  res.send("Hola ACR Lover Raul 123")
})

app.listen(8080,function(){
  console.log("Listening on port 8080")
})

