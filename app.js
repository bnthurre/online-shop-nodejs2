const express = require("express");
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);

app.use( (req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(8001);


//This app object is the central piece that allows you to define routes, handle middleware, and manage the behavior of your web server.


//app instance do work of creating server so i dont need createserver function

//middleware (req,res,next) functions that handle requests and send appriciate resbond

//Routes =url determine what happens when a user accesses a certain URL on your server.


//body-parser package parses what enter requests but not files