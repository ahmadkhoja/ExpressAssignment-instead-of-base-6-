const port = 3000

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.write(`
        Welcome Back to Express Batata... 
    `)
    res.send()
})

app.get('/test',(req,res)=>{
    res.write(`
        {status:200, message:"ok"}    
    `)
    res.send()
})
app.get('/time',(req,res)=>{
    let date = new Date();
    let h = date.getHours();
    let s = date.getSeconds();
    res.write(`
        {status:200, message:${h}:${s} }    
    `)
    res.send()
})

app.listen(port,(err)=>{
    if(err){
        console.log('cannot connect to the server')
    }else{
        console.log(`listining to port ${port}`)
    }
})