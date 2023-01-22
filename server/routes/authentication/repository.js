const Users = require("../../models/user");

async function createUser(usersData) {
  let newUser = new Users(usersData);
  console.log("this is a new user", newUser);
  let createdUser = await newUser.save();
  console.log("saving users info", createdUser);
  return createdUser.id;
}

async function listUser() {
  return Users.find({});
}

async function findUserByUsername(userName) {
  return Users.findOne({ userName });
}

async function findById(id) {
  let fullUserRecord = await Users.findById(id);
  let userToReturn = {
    id: fullUserRecord.id,
    username: fullUserRecord.userName,
  };
  return userToReturn;
}

async function updateUser(id, updatedUser) {
  console.log("From the model/update", id, updatedUser);
  await Users.findByIdAndUpdate(id, updatedUser, {
    returnDocument: "after",
  });
  // return Users.findByIdAndUpdate(id, newUser)
}

async function deleteUser(id) {
  return Users.findByIdAndDelete(id);
}

module.exports = {
  createUser,
  listUser,
  findById,
  updateUser,
  deleteUser,
  findUserByUsername,
};
