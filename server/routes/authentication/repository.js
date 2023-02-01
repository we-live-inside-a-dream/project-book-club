const Users = require("../../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;

async function createUser(usersData, res) {
    const hashedPassword = bcrypt.hashSync(usersData.password, saltRounds);
    const newUser = await Users.create({
      firstName: usersData.firstName,
      lastName: usersData.lastName,
      userName: usersData.userName,
      email: usersData.email,
      password: hashedPassword,
    });
  return newUser;
}

async function listUser() {
  return Users.find({});
}

async function findUserByUsername(userName) {
  const username = await Users.findOne({ userName });
  return username;
}

async function findById(id) {
  let fullUserRecord = await Users.findById(id);
  return fullUserRecord;
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

async function verifyPassword(password, hashedPassword) {
  const passwordsMatch = bcrypt.compare(password, hashedPassword);
  return passwordsMatch;
}

module.exports = {
  createUser,
  listUser,
  findById,
  updateUser,
  deleteUser,
  findUserByUsername,
  verifyPassword,
};
