const mongoose = require('mongoose');

let dbUrl = 'mongodb+srv://Reza:Modernwarfare2@cluster0.zbhoc.mongodb.net/BookClub?retryWrites=true&w=majority'
mongoose.connect(dbUrl)

module.exports = mongoose