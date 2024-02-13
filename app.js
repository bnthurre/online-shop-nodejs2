const http = require('http');
const express = require('express');

//This app object is the central piece that allows you to define routes, handle middleware, and manage the behavior of your web server. 
const app = express();

app.use((req,res,next)=>{
    console.log('in the middleware')
    next();
})
app.use((req,res,next)=>{
    console.log('in the another middleware')
})

const server = http.createServer(app)

server.listen(8001);


//middleware (req,res,next) functions that handle requests and send appriciate resbond