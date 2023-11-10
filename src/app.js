const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myconnection = require("express-myconnection");
const app = express();
const loginRoutes = require("./routes/login");

//settings
app.set("PORT", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("public", path.join(__dirname, "public"));
app.listen(app.get("PORT"));
app.use(morgan("dev"));

//middlewares
// app.use(morgan("dev"));
// app.use(
//   myconnection(mysql, {
//     host: "192.168.0.130",
//     user: "test",
//     password: "1221",
//     port: 3306,
//     database: "crud",
//   },'single')
// );

// //app

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", loginRoutes);
