// const login = require "../controllers/authenticationController";

const passport = require("passport");
const express = require("express");
const router = express.Router();
const userRepo = require("./repository");
const controllers = require("./controller");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;
// Post Route: /login
router.post("/login", passport.authenticate("local"), async (req, res) => {
  console.log("this is the user logging in from routes", req.user);
  res.send(req.user);
 
});

router.get("/loggedInUser", (req, res) => {
  res.send(req.user);
});

// Route to Logout
router.get("/logout", (req, res) => {
  req.logout(req.user, (err) => {
    if (err) return next(err);
  });
});

router.post("/create", async (req, res) => {
  console.log("This is the body from create endpoint", req.body);
  let newUser = req.body;
  let createdId = await userRepo.createUser(newUser);
  console.log("from API this is a new user created", createdId);
  res.send(createdId);
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
