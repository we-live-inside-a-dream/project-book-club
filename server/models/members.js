
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

module.exports = {
    createMember
}

