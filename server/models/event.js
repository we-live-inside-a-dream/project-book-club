const mongoose = require('./mongooseDb');

const Event = mongoose.model("events", {
    title: {
        type: "string",
        required: true
    },
    userProfileId: {
        type: "string",
        required: true
    },
    firstName: {
        type: "string",
        required: true
    },
    lastName: {
        type: "string",
        required: true
    },
    type: {
        type: [String],
        requited: true
    },
    recurring: {
        type: Boolean,
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    startTime: {
        type: String,

    },
    endTime: {
        type: String,
    },
    notes: {
        type: String,
    },
    visibility: {
        type: Boolean,
    }
})

async function createEvent(eventData) {
    let newEvent = new Event(eventData)
    let createdEvent = await newEvent.save()
    console.log("saving event info", createdEvent)
    return createdEvent._id;
}