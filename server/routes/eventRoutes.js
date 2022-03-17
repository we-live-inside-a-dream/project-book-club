const express = require('express');
const router = express.Router()
const eventModel = require('../models/events')

router.post('/createEvent', async (req, res) => {
    let newEvent = req.body
    let createdEventId = await eventModel.createEvent(newEvent)
    res.send(createdEventId)
    console.log("from API event route eventId", createdEventId)
})


module.exports = router