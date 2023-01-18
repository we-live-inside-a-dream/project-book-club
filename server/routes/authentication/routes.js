// const login = require "../controllers/authenticationController";

const passport = require("passport");
const express = require("express");
const router = express.Router();
const membersListModel = require("./repository");
const Member = require("../../models/member");
const LocalStrategy = require("passport-local").Strategy;

// Passport Local Strategy
passport.use(
  new LocalStrategy(function (username, password, done) {
    console.log("passport is trying to verify a member",username )
    Member.findMemberByUsername(username)
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
  Member.findById(id)
    .then((member) => {
      if (!member) {
        done(new Error("Member not found or deleted"))
      }
      done(null, member);
    })
    .catch(done) 
});

// Post Route: /login
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("member logged in susscess")
  console.log("from API login route", req.member);
  res.sendStatus(200);
});

// Route to Logout
router.get("/logout", function (req, res) {
  req.logout();
});

router.post("/create", async (req, res) => {
  let newMember = req.body;
  let createdId = await membersListModel.createMember(newMember);
  res.send(createdId);
  console.log("from API this is a new member", createdId);
});

router.get("/list", async (req, res) => {
  let membersList = await membersListModel.listMember();
  res.send(membersList);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let member = await membersListModel.findById(id);
  res.send(member);
});

//not working :(
router.post("/update/:id", async (req, res) => {
  let id = req.params.id;
  let updatedMember = req.body;
  console.log("updating members", id, "with", updatedMember);
  let newUpdatedMember = await membersListModel.updateMember(id, updatedMember);
  console.log("this is newUpdatedMember from routes", newUpdatedMember);
  res.send(newUpdatedMember);
});

module.exports = router;
