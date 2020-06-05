module.exports = (app) => {
  app.use("/auth", require("./auth.js"));

  app.get("/", (req, res) => {
    res.render("home");
  });
};
