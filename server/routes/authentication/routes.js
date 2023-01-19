// const login = require "../controllers/authenticationController";

const passport = require("passport");
const express = require("express");
const router = express.Router();
const memberRepo = require("./repository");
const controllers = require("./controller");
const Member = require("../../models/member");
const LocalStrategy = require("passport-local").Strategy;

// Post Route: /login
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("member logged in susscess");
  console.log("from API login route", req.user);
  res.sendStatus(200);
});

router.get("/loggedInMember", function (req, res) {
  res.send(req.user);
});

// Route to Logout
router.get("/logout", function (req, res) {
  req.logout();
});

router.post("/create", async (req, res) => {
  let newMember = req.body;
  let createdId = await memberRepo.createMember(newMember);
  res.send(createdId);
  console.log("from API this is a new member", createdId);
});

router.get("/list", async (req, res) => {
  let memberRepo = await memberRepo.listMember();
  res.send(memberRepo);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let member = await memberRepo.findById(id);
  res.send(member);
});

//not working :(
router.post("/update/:id", async (req, res) => {
  let id = req.params.id;
  let updatedMember = req.body;
  console.log("updating members", id, "with", updatedMember);
  let newUpdatedMember = await memberRepo.updateMember(id, updatedMember);
  console.log("this is newUpdatedMember from routes", newUpdatedMember);
  res.send(newUpdatedMember);
});

module.exports = router;
