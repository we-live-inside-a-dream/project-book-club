import { login } from '../controllers/authenticationController';

const { application } = require('express');
const express = require('express');
const router = express.Router();



// Route to Logout
app.get('/logout', function(req, res) {
    req.logout();
});

// Post Route: /login
app.post('/login', passport.authenticate('local', { failureRedirect: '/'}), function(req, res) {
    console.log('this is the user', req.user)
    let response = login(req.user)
    res.send(response)
});


