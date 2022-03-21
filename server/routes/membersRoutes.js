const express = require('express');
const router = express.Router()

const membersListModel = require('../models/members')

router.post('/create', async (req, res) => {
    let newMember = req.body
    let createdId = await membersListModel.createMember(newMember)
    res.send(createdId)
    console.log("from API this is a new member", createdId)
})

router.get('/list', async(req, res) => {
    let membersList = await membersListModel.listMembers()
    res.send(membersList)
})


router.get('/:id', async(req, res) => {
    let id = req.params.id
    let member = await membersListModel.findById(id)
    res.send(member)
})

//not working :(
router.post('/update/:id', async (req, res) => {
    let id = req.params.id
    let updatedMember = req.body
    console.log("updating members", id, "with", updatedMember)
    let newUpdatedMember = await membersListModel.updateMember(id, updatedMember)
    console.log("this is newUpdatedMember from routes", newUpdatedMember)
    res.send(newUpdatedMember)
})

module.exports = router