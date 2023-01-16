const express = require('express')
var cors = require('cors');
const bodyParser = require('body-parser'); // parser middleware
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const bcrypt = require('bcrypt'); // password hashing

const eventRoutes = require('./routes/eventRoutes')
const membersRoutes = require('./routes/authentication/routes')
const User = require('./models/user');
const { authenticate } = require('passport');


const app = express()
const port = 5001

app.use(express.json())

// Middleware  
app.use(cors());
app.use('/api/events', eventRoutes)
// app.use('/api/members', membersRoutes)
app.use('/api/members/routes', membersRoutes)

app.use(session({
  secret: 'secretcode',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000} // 1 hour
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})