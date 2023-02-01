const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser"); // parser middleware
const session = require("express-session"); // session middleware
const passport = require("passport"); // authentication
const connectEnsureLogin = require("connect-ensure-login"); //authorization

const eventRoutes = require("./routes/events/routes");
const authRoutes = require("./routes/authentication/routes");

const app = express();
const port = 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());

// Middleware
app.use(cors());
app.use("/api/events", eventRoutes);
app.use("/api/member/", authRoutes);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
