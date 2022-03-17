import mongoose from 'mongoose'

let dbUrl = 'mongodb+srv://Reza:l3t-m3-1n@cluster0.zbhoc.mongodb.net/bookClubDb?retryWrites=true&w=majority'
mongoose.connect(dbUrl)

module.exports = mongoose