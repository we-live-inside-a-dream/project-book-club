const express = require('express');
const router = express.Router()

const membersListModel = require('../models/members')

router.get('/list', async(req, res) => {
    let membersList = await membersListModel.listMembers()
    res.send(membersList)
})

router.post('/create', async (req, res) => {
    let newMember = req.body
    let createdId = await membersListModel.createMember(newMember)
    res.send(createdId)
})

router.get('/:id', async(req, res) => {
    let id = req.params.id
    let member = await membersListModel.findById(id)
    res.send(member)
})

router.get('/update/:id', async (req, res) => {
    let id = req.params.id
    let updatedMember = req.body
    console.log("updating members", id, "with", updatedMember)
    let member = await membersListModel.update(id, updatedMember)
    res.send(member)
})

module.exports = router