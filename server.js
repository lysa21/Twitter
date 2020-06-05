const express = require("express");
const dotenv = require('dotenv').config()

// const flash = require('connect-flash');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
// const passport = require('passport');
// const session = require('express-session');
// const orm = require('./db/orm.js');

const mysql = require("mysql2");
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: "root",
  database: "commons",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const PORT = 8080;
const app = express();

//Middleware-------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars-------------------------------------------------------
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/auth/register", (req, res) => {
  res.render("register");
});

app.get("/auth/login", (req, res) => {
  res.render("login");
});

app.post("/bidule", (req, res) => {
  console.log(req.body.coco);
  console.log("tutut");
  ////res.redirect('/');
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);
  console.log("tutut");
  ////res.redirect('/');
});

app.listen(PORT, function () {
  console.log("listening on port", PORT);
});
