const { application } = require('express');
const express = require('express');
const router = express.Router();

// Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

// Route to Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Route to Dashboard
app.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.send(`Hello ${req.user.username}! Your session ID is ${req.sessionID}  and your session expires in ${req.session.cookie.maxAge / 1000} seconds.<br><br>
    <a href="/logout">Log Out</a><br><br>
    <a href="/secret">Members Only</a>`);
});

// Route to Secret Page
app.get('/secret', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.sendFile(__dirname + '/public/secret-page.html');
});

// Route to Logout
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

// Post Route: /login
app.post('/login', passport.authenticate('local', { failureRedirect: '/'}), function(req, res) {
    console.log('this is the user', req.user)
    res.redirect('/dashboard')
});
