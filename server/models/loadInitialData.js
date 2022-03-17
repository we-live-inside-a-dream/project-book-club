
let studentsList = require("./studentsList.json");
let studentsListModel = require("./student");

const loadInitialData = async () => {
  for (let student of studentsList) {
    console.log("added student to list", student.name);
    let createdId = await studentsListModel.createStudent(student);
    console.log(
      "student first name ",
      student.name,
      "created with id",
      createdId
    );
  }
};
loadInitialData();
// studentsList.forEach(async (student) => {
//     console.log("Creating shift for", student.name);
//     let createdId = await studentsListModel.createStudent(student);
//     console.log("... created with id", createdId);
//   });
  
