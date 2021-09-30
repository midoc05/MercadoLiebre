const express = require("express");
const server = express(); 

const path = require("path"); 


server.get ('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
    })

server.listen (3030, ()=>{
console.log('Server En Marche')
})


server.get ('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
    })

