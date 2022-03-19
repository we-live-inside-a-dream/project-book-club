const express = require('express');
const router = express.Router()
//const eventModel = require('../models/events')
const studentsList = require('../models/membersList.json')

// router.get('/createEvent', async (req, res) => {
//     let newEvent = req.body
//     let createdEventId = await eventModel.createEvent(newEvent)
//     res.send(createdEventId)
//     console.log("from API event route eventId", createdEventId)
// })
router.get('/createEvent', async (req, res) => {
    res.send(membersList)

})


module.exports = router