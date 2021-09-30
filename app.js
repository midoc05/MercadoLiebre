const express = require("express");
const server = express(); 
const path = require("path"); 

server.use ('/static', express.static('/public'))

server.get ('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
    })

server.listen (3030, ()=>{
console.log('Server En Marche')
})