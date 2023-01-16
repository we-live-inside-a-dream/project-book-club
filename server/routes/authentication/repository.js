const Members = require('../models/members')

async function createMember(membersData) {
    let newMember = new Members(membersData)
    console.log("this is a new member", newMember)
    let createdMember = await newMember.save()
    console.log("saving members info", createdMember)
    return createdMember.id;
}

async function listMembers() {
    return Members.find({})
}

async function findById(id) {
    return Members.findById(id)
}

async function updateMember(id, updatedMember) {
    console.log("From the model/update", id, updatedMember)
    await Members.findByIdAndUpdate(id, updatedMember, {
        returnDocument: "after"
    })
    // return Members.findByIdAndUpdate(id, newMember)
}

module.exports = {
    createMember,
    listMembers,
    findById,
    updateMember
}