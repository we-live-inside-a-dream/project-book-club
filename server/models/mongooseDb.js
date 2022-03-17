import mongoose from 'mongoose'

let dbUrl = 'mongodb+srv://reza:Modernwarfare2@cluster0.zbhoc.mongodb.net/BookClub?retryWrites=true&w=majority'
mongoose.connect(dbUrl)

module.exports = mongoose