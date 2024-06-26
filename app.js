const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const mongoConnect = require('./utils/database')
const errorController = require("./controllers/error");


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
// const shopRoute = require("./routes/shop");


// db.execute("SELECT * FROM products")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.use((req, res, next) => {
  // User.findByPk(1).then(user => {
  //   req.user = user;
  //   next()
  // }
  // ).catch(err => {
  //   console.log(err)
  // })
})
app.use("/admin", adminRoute);
// app.use(shopRoute);

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

mongoConnect(()=>{
  app.listen(7001)
})


