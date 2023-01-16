import { login } from "../controllers/authenticationController";

const { application } = require("express");
const express = require("express");
const router = express.Router();
const membersListModel = require("./repository");

// Route to Logout
app.get("/logout", function (req, res) {
  req.logout();
});

// Post Route: /login
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  function (req, res) {
    console.log("this is the user", req.user);
    let response = login(req.user);
    res.send(response);
  }
);

router.post("/create", async (req, res) => {
  let newMember = req.body;
  let createdId = await membersListModel.createMember(newMember);
  res.send(createdId);
  console.log("from API this is a new member", createdId);
});

router.get("/list", async (req, res) => {
  let membersList = await membersListModel.listMembers();
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
