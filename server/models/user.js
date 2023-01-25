const mongoose = require("./mongooseDb");

const User = mongoose.model("User", {
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  subscriptionDate: {
    type: Date,
  },
  userName: {
    type: String,
  },
});

module.exports = User;
