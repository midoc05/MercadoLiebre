const express = require("express");
const server = express(); 

const path = require("path"); 


const publicPath = path.resolve(__dirname, './public');

server.use(express.static(publicPath))




server.listen (3030, ()=>{
console.log('Server En Marche')
})


server.get ('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
    })

