
const mongoose = require('./mongooseDb');

const Members = mongoose.model('Members', {
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

export default Members;
