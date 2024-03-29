const express = require("express");
const router = express.Router();
const eventModel = require("../../models/events");
const { update } = require("../../models/user");
const mustBeLoggedIn = require("./controller");
// const studentsList = require('../models/membersList.json')

router.post("/createEvent", mustBeLoggedIn, async (req, res) => {
  let newEvent = req.body;
  console.log("this is the body ", newEvent);
  let createdEventId = await eventModel.createEvent(newEvent);
  console.log("this is the created event id", createdEventId);
  res.send(createdEventId);
  console.log("from API event route eventId", createdEventId);
});

router.get("/events", async (req, res) => {
  let events = await eventModel.getEvents();
  res.send(events);
});

router.post("/updateEvent/:id", mustBeLoggedIn, async (req, res) => {
  let id = req.params.id;
  let updatedEvent = req.body;
  console.log("this is updatedEvent from routes", updatedEvent);
  let newUpdatedEvent = await eventModel.updateEvent(id, updatedEvent);
  console.log("this is newUpdatedEvent from routes", newUpdatedEvent);
  res.json(newUpdatedEvent);
});

router.delete("/deleteEvent/:id", mustBeLoggedIn, async (req, res) => {
  let id = req.params.id;
  let deletedEvent = await eventModel.deleteEvent(id);
  console.log("this is the deleteEvent from router", deletedEvent);
  res.send(deletedEvent);
});

module.exports = router;