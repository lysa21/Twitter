const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("./../models/User");
const passport = require('passport')
const authRouter = express.Router();
const authController = require('./../controller/authController')


authRouter.get("/register", (req, res) => {
  res.render("register");
});

authRouter.get("/login", (req, res) => {
  res.render("login");
});

authRouter.post("/register", [check("username").isLength({ min: 5 }), check("password").isLength({ min: 5 })], authController.register);

authRouter.post(
  "/login",
  passport.authenticate("local", { successRedirect: "/", failureRedirect: "/login", failureFlash: true }),
  (req, res) => {
    console.log(req.body);
    console.log("tutut");
  }
);

module.exports = authRouter;
