const express = require('express')
var cors = require('cors');
const bodyParser = require('body-parser'); // parser middleware
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login'); //authorization

const eventRoutes = require('./routes/eventRoutes')
const membersRoutes = require('./routes/membersRoutes')
const User = require('./models/user');


const app = express()
const port = 5001

app.use(express.json())


app.use(cors());
app.use('/api/events', eventRoutes)
app.use('/api/members', membersRoutes)

app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: false,
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