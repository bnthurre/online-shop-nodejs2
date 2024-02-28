const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const path = require("path");

const errorController = require("./controllers/error");
const db = require("./utils/database");

const app = express();

// app.engine(
//   "hbs",
//   handlebars.engine({
//     extname: "hbs",
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

db.execute("SELECT * FROM products")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoute);

//using plain html
// app.use( (req,res,next)=>{
//     res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
// })

//using pug
// app.use( (req,res,next)=>{
//     res.status(404).render('404',{pageTitle: "page not found"});
// })
//using hbs
app.use(errorController.get404);

app.listen(8001);
