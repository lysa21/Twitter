const { validationResult } = require("express-validator");
const User = require("./../models/User");

class AuthController {
  constructor() {}

  static register(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.redirect("/auth/register");
    let user = new User(req.body);
    //
    //
    //
    User.create(user);
    res.redirect("/auth/register");
  }
}

module.exports = AuthController;
