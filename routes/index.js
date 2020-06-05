const isAuth = require('./../middleware/isAuth')

module.exports = (app) => {
  app.use("/auth", require("./auth.js"));

  app.get("/", isAuth, (req, res) => {
    console.log(req.user)
    res.render("home");
  });
};
