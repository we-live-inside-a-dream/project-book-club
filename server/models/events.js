const mongoose = require('mongoose');

const Event = mongoose.model("Events", {
    title: {
        type: String,
        //required: true
    },
    userProfileId: {
        type: String,
        //required: true
    },
    firstName: {
        type: String,
        //required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    type: {
        type: [String],
        //requited: true
    },
    recurring: {
        type: Boolean,
    },
    startDate: {
        type: String,
        //required: true
    },
    endDate: {
        type: String,
        //required: true
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

//only creates if there are no required field! or else throws validation error!
async function createEvent(eventData) {
    let newEvent = new Event(eventData)
    console.log("this is new event from the model", newEvent)
    let createdEvent = await newEvent.save()
    console.log("saving event info", createdEvent)
    return createdEvent._id;
}

async function updateEvent(id, updatedEvent) {
    console.log("FROM THE MODEL", id, updatedEvent);
    await Event.findByIdAndUpdate(id, updatedEvent, {
      returnDocument: "after",
    });
    // return theUpdatedEvent;
  }

async function deleteEvent(id) {
    await Event.findByIdAndDelete(id)
}

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent
}