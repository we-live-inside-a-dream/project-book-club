const eventRepo = require("./repository");

const mustBeLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = mustBeLoggedIn;
