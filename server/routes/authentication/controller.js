
const passport = require("passport");
const memberRepo = require("./repository");
const LocalStrategy = require("passport-local").Strategy;

// Passport Local Strategy
passport.use(
  new LocalStrategy(function (username, password, done) {
    console.log("passport is trying to verify a member",username )
    memberRepo.findUserByUsername(username)
      .then((member) => {
        if (!member || member.password !== password) {
          done(null, false, { message: "Incorrect username or password." });
        }
        done(null, member);
      })
      .catch(done)
  })
);

passport.serializeUser(function(member, done) {
  console.log("passport wants to store this member in a cookie", member)
  done(null, member.id);
});

passport.deserializeUser(function(id, done) {
  console.log('passport is trying to recover the member from the cookie', id)
  memberRepo.findById(id)
    .then((member) => {
      if (!member) {
        done(new Error("Member not found or deleted"))
      }
      done(null, member);
    })
    .catch(done) 
});
