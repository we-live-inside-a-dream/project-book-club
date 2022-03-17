const { model } = require('mongoose');
const mongoose = require('mongoose');

const Student = mongoose.model('Students', {
    name: String,
    start: String,
    end: String,
    date: String,
})


async function createStudent(StudentData) {
    let newStudent = new Student(StudentData)
    let createdStudent = await newStudent.save()
    console.log("saving student info", createdStudent)
    return createdStudent._id;
}

module.exports = {
    createStudent
}

