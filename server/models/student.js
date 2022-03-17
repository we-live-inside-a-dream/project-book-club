
const mongoose = require('./mongooseDb');

const Student = mongoose.model('Student', {
    "name": String,
    "start": String,
    "end": String,
    "date": String,
})


async function createStudent(studentData) {
    let createdStudent = await Student.create(studentData)
    console.log("saving student info", createdStudent)
    return createdStudent.id;
}

module.exports = {
    createStudent
}

