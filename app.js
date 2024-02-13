const express = require("express");
const bodyParser = require('body-parser');

//This app object is the central piece that allows you to define routes, handle middleware, and manage the behavior of your web server.
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
  res.send("<html><form action ='/product' method ='post'> <input type='text' name='title'><button type='submit'>submit</button></form></html>");
});
app.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/')
  });
//this mean when form submited post request in this path do something
app.use((req, res, next) => {
  res.send("<h1>Heloo from expesss js</h1>");
});

app.listen(8001);

//app instance do work of creating server so i dont need createserver function

//middleware (req,res,next) functions that handle requests and send appriciate resbond

//Routes =url determine what happens when a user accesses a certain URL on your server.


//body-parser package parses what enter requests but not files