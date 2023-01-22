// const login = require "../controllers/authenticationController";

const passport = require("passport");
const express = require("express");
const router = express.Router();
const userRepo = require("./repository");
const controllers = require("./controller");
const User = require("../../models/user");
const LocalStrategy = require("passport-local").Strategy;

// Post Route: /login
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("user logged in susscess");
  console.log("from API login route", req.user);
  res.sendStatus(200);
});

router.get("/loggedInUser", function (req, res) {
  res.send(req.user);
});

// Route to Logout
router.get("/logout", function (req, res) {
  req.logout();
});

router.post("/create", async (req, res) => {
  let newUser = req.body;
  let createdId = await userRepo.createUser(newUser);
  res.send(createdId);
  console.log("from API this is a new user", createdId);
});

router.get("/list", async (req, res) => {
  let userRepo = await userRepo.listUser();
  res.send(userRepo);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let user = await userRepo.findById(id);
  res.send(user);
});

//not working :(
router.post("/update/:id", async (req, res) => {
  let id = req.params.id;
  let updatedUser = req.body;
  console.log("updating users", id, "with", updatedUser);
  let newUpdatedUser = await userRepo.updateUser(id, updatedUser);
  console.log("this is newUpdatedUser from routes", newUpdatedUser);
  res.send(newUpdatedUser);
});

module.exports = router;
