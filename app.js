const express=require('express')
const app=express()

app.get('/',function(req,res){
  res.send("Hola ACR Lover")
})

app.listen(8080,function(){
  console.log("Listening on port 8080")
})

