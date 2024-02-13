const http = require('http');
const express = require('express');

//This app object is the central piece that allows you to define routes, handle middleware, and manage the behavior of your web server. 
const app = express();

const server = http.createServer(app)

server.listen(8001);