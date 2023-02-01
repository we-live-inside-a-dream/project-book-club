const passport = require("passport");
const userRepo = require("./repository");
const LocalStrategy = require("passport-local").Strategy;

// Passport Local Strategy
passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
    const user = await userRepo.findUserByUsername(username);
    if(!user) {
      return done(null, false);
    }
    const passwordsMatch = await userRepo.verifyPassword(password, user.password)
    if(!passwordsMatch){
      return done(null, false)
    }
    return done(null, user)
  } catch(error) {
    return done(error, null) 
  }
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
