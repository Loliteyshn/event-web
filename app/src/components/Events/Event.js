import React from 'react';
import { Link } from 'react-router-dom';
import s from './Events.module.css';

const Event = React.memo(({ event }) => {
    const eventDate = new Date(event.eventdate);
    const formattedDate = eventDate.toLocaleDateString('en-CA')
    return <div className={s.event}>
        <h5>{event.title}</h5>
        <p>{event.description}</p>
        <div className={s.flex}>
            <p>{event.organizer}</p>
            <p>{formattedDate}</p>
        </div>
        <div className={s.flex}>
            <Link to={'/registration/' + event.eventid}>Register</Link>
            <Link to={'/view/' + event.eventid}>View</Link>
        </div>
    </div>
})

export default Event;