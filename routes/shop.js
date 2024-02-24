const express = require("express");
const shopcontroller = require('../controllers/shop')
const rootDir = require("../utils/rootDir");

const router = express.Router();

//using plain html

// router.get('/', (req,res,next)=>{
//     console.log(adminData.products);
//     res.sendFile(path.join(rootDir,'views', 'shop.html'));
// })

//using pug template engine
router.get("/", shopcontroller.getIndex);

//products
router.get("/products",shopcontroller.getProducts);

//
router.get("/products/:productId", shopcontroller.getProduct);


//cart
router.get("/cart",shopcontroller.getCart);

//post cart
router.post("/cart",shopcontroller.postCart);



//orders
router.get("/orders",shopcontroller.getOrders);


//checkout
router.get("/checkout",shopcontroller.getCheckout);





module.exports = router;
