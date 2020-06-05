

const LocalStrategy = require("passport-local").Strategy;
const User = require("./../models/User");

module.exports = (passport) => {
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
    return passport;
}