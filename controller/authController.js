const {validationResult } = require("express-validator");
const User = require("./../models/User");


module.exports = {
  register: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.redirect("/auth/register");
    let user = new User(req.body);
    User.create(user);
    res.redirect("/auth/register");
  }
};
