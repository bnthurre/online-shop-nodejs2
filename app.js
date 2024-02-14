const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('./utils/rootDir');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoute.routes);
app.use(shopRoute);

//using plain html
// app.use( (req,res,next)=>{
//     res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
// })

//using pug 
app.use( (req,res,next)=>{
    res.status(404).render('404',{pageTitle: "page not found"});
})
app.listen(8001);


