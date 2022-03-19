
const mongoose = require('./mongooseDb');

const Members = mongoose.model('Members', {
    "name": String,
    "start": String,
    "end": String,
    "date": String,
})


async function createMember(MemberData) {
    let createdMember = await Members.create(MemberData)
    console.log("saving members info", createdMember)
    return createdMember.id;
}

module.exports = {
    createMember
}

