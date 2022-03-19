const express = require('express');
const router = express.Router()
const eventModel = require('../models/events')
// const studentsList = require('../models/membersList.json')


router.post('/createEvent', async (req, res) => {
    let newEvent = req.body
    let createdEventId = await eventModel.createEvent(newEvent)
    res.send(createdEventId)
    console.log("from API event route eventId", createdEventId)
})


router.post('/updateEvent:id', async (req, res) => {
    let id = req.params.id
    let updatedEvent = req.body
    let newUpdatedEvent = await eventModel.updateEvent(id, updatedEvent)
    res.json(newUpdatedEvent)
})


//this route doesn't delete
router.delete('/deleteEvent:id', async (req, res) => {
    let id = req.params.id
    let deleteEvent = await eventModel.deleteEvent(id)
    res.send(deleteEvent)
})

module.exports = router