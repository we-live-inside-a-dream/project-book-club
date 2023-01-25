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
router.post(
  "/login",
  passport.authenticate("local"),
  async function (req, res) {
    try {
      const user = await userRepo.findUserByUsername(req.body.username);
      console.log("This is the user", user);
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          res.send(user);
        } else {
          res.status(401).send("Invalid username or password");
        }
      } else {
        res.status(401).send("Invalid username or password");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    // console.log("user logged in susscess");
    // console.log("from API login route", req.user);
    // res.send(req.user);
  }
);

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
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const insertResult = await userRepo.createUser({
      username: req.body.username,
      password: hashedPwd,
    });
    res.send(insertResult);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
// let newUser = req.body;
// let createdId = await userRepo.createUser(newUser);
// res.send(createdId);
// console.log("from API this is a new user", createdId);

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
