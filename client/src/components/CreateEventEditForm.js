import { useState, useEffect, useContext } from "react";



const createEventForm = () => {
    
    const [title, setTitle] = useState(nll)
    const [firstName, setFirstName] = useState(nll)
    const [lastName, setLastName] = useState(nll)
    const [startDate, setStartDate] = useState(nll)
    const [endDate, setEndDate] = useState(nll)
    const [startTime, setStartTime] = useState(nll)
    const [endTime, setEndTime] = useState(nll)
    const [type, setType] = useState(null)


    
    async function createEvent(newEvent) {
        await fetch("/api/events/createEvent", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newEvent),
        })
    }

    async function postData() {
        let newEvent = {
            title,
            firstName,
            lastName,
            startTime,
            endTime,
            startDate,
            endDate,
            type
        }
        await onSave(newEvent)
    }

    return(
        <form>
            <label>First Name</label>
        </form>
    )
}


