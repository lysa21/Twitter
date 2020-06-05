const express = require("express");
const dotenv = require("dotenv").config();

// const flash = require('connect-flash');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
// const orm = require('./db/orm.js');

var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

const User = require("./models/User");

const PORT = 8080;
const app = express();

passport.use(
  new LocalStrategy(async function (username, password, done) {
    let users = await User.findByUsername(username);
    console.log(users);
    if (!users.length) {
      return done();
    } else {
      //comparer mot de passe
      return done(null, users[0]);
    }
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) {
    //   }
    //   if (!user) {
    //     return done(null, false, { message: "Incorrect username." });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: "Incorrect password." });
    //   }
    //  return done(null, user);
    // });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());
//Middleware-------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars-------------------------------------------------------
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/public", express.static("public"));

require("./routes/index")(app);

app.listen(PORT, function () {
  console.log("listening on port", PORT);
});
