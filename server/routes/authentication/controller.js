const passport = require("passport");
const userRepo = require("./repository");
const LocalStrategy = require("passport-local").Strategy;

// Passport Local Strategy
passport.use(
  new LocalStrategy(function (username, password, done) {
    console.log("passport is trying to verify a user", username);
    userRepo
      .findUserByUsername(username)
      .then((user) => {
        if (!user || user.password !== password) {
          done(null, false, { message: "Incorrect username or password." });
        }
        done(null, user);
      })
      .catch(done);
  })
);

passport.serializeUser(function (user, done) {
  console.log("passport wants to store this user in a cookie", user);
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log("passport is trying to recover the user from the cookie", id);
  userRepo
    .findById(id)
    .then((user) => {
      if (!user) {
        done(new Error("User not found or deleted"));
      }
      done(null, user);
    })
    .catch(done);
});

module.exports = passport;
