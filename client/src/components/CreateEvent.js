import { useState, useEffect, useContext } from "react";


const [startDate, setStartDate] = useState(nll)
const [endDate, setEndDate] = useState(nll)
const [startTime, setStartTime] = useState(nll)
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