const mongoose = require('mongoose');
let studentsList = require("./studentsList.json");
let studentsListModel = require("./students");

// const loadInitialData = async () => {
//   for (let student of studentsList) {
//     console.log("added student to list", student.firstName);
//     let createdId = await studentsListModel.createStudent(student);
//     console.log(
//       "student first name ",
//       student.firstName,
//       "created with id",
//       createdId
//     );
//   }
// };
// loadInitialData();
studentsList.forEach(async (student) => {
    console.log("Creating shift for", student.name);
    let createdId = await studentsListModel.createStudent(student);
    console.log("... created with id", createdId);
  });
  
