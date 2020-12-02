import { useState, useEffect } from 'react';

export default function ClockTimer() {
    const ticker = NewTime(new Date());

    return(
        <div className="clock">
            <h2>{ticker.toLocaleTimeString()}</h2>
        </div>
    )
}

function NewTime(currentDate) {
    const [date, setDate] = useState(currentDate);

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);

        return function clear() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return date;
}

