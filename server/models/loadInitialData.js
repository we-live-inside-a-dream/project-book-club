
let membersList = require("./membersList.json");
let membersListModel = require("./members");

const loadInitialData = async () => {
  for (let member of membersList) {
    console.log("added student to list", member.name);
    let createdId = await membersListModel.createMember(member);
    console.log(
      "members first name ",
      member.name,
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
  
