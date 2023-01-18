
const mongoose = require('./mongooseDb');

const Member = mongoose.model('Members', {
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    subscriptionDate: {
        type: Date,
    },
    userName: {
        type: String
    }
    
})

module.exports = Member;
