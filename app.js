const express = require("express");

//This app object is the central piece that allows you to define routes, handle middleware, and manage the behavior of your web server.
const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>Heloo from expesss js</h1>");
});

app.listen(8001);
//app instance do work of creating server so i dont need createserver function

//middleware (req,res,next) functions that handle requests and send appriciate resbond
