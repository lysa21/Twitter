const express = require("express");
require("dotenv").config();
const flash = require('connect-flash');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
var passport = require("passport");
const PORT = 8080;
const app = express();

require('./config/passport')(passport);

app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars-------------------------------------------------------
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use('/public', express.static(__dirname + '/public'));

require("./routes/index")(app);

app.listen(PORT, function () {
  console.log("listening on port", PORT);
});
