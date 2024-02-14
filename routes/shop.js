const express = require('express');
const path = require('path');
const adminData = require('./admin');
const rootDir = require('../utils/rootDir');

const router = express.Router();

//using plain html

// router.get('/', (req,res,next)=>{
//     console.log(adminData.products);
//     res.sendFile(path.join(rootDir,'views', 'shop.html'));
// })

//using pug template engine
router.get('/', (req,res,next)=>{
    res.render('shop');
})
module.exports = router;