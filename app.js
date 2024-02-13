const express = require("express");

//This app object is the central piece that allows you to define routes, handle middleware, and manage the behavior of your web server.
const app = express();

app.use('/add-product',(req, res, next) => {
  res.send("<h1>Heloo from add product page js</h1>");
});
app.use((req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>Heloo from expesss js</h1>");
});

app.listen(8001);

//app instance do work of creating server so i dont need createserver function

//middleware (req,res,next) functions that handle requests and send appriciate resbond

//Routes =url determine what happens when a user accesses a certain URL on your server.
