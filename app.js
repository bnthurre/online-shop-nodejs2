const express = require("express");
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoute);
app.use(shopRoute);

app.use( (req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(8001);


