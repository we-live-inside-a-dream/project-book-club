
const mongoose = require('./mongooseDb');

const Members = mongoose.model('Members', {
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    }
    // "firstName": String,
    // "lastName": String
})


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

async function update(id, updatedMember) {
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
    update
}

