const express = require("express");
const server = express();

const path = require("path");

const publicPath = path.join(__dirname, "./public");
server.use(express.static(publicPath));


const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

server.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

server.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

// server.listen(3000, () => {
//     console.log('Server En Marche')
// })

server.listen(port, () => {
    console.log('Server En Marche')
})



// const port = procserver.listen(port, ()=>{
//     console.log("start server");
// });ess.env.PORT || 3000;

