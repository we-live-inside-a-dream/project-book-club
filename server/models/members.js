
const mongoose = require('./mongooseDb');

const Members = mongoose.model('Members', {
    "firstName": String,
    "lastName": String
})


async function createMember(MemberData) {
    let createdMember = await Members.create(MemberData)
    console.log("saving members info", createdMember)
    return createdMember.id;
}

async function listMembers() {
    return Members.find({})
}

async function findById(id) {
    return Members.findById(id)
}

async function update(id, newMember) {
    return Members.findByIdAndUpdate(id, newMember)
}

module.exports = {
    createMember,
    listMembers,
    findById,
    update
}

