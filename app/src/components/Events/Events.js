import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, requestEvents } from '../../redux/events-reducer';
import { getEvents, getLimit, getPage, getTotalItemsCount } from '../../redux/events-selector';
import Event from './Event';
import s from './Events.module.css';
import Paginator from '../Paginator/Paginator';

const Events = React.memo(() => {
    const page = useSelector(getPage);
    const limit = useSelector(getLimit);
    const totalItemsCount = useSelector(getTotalItemsCount);
    const events = useSelector(getEvents);
    const dispatch = useDispatch();
    const [sortedEvents, setSortedEvents] = useState([]);
    const [sortingCriterion, setSortingCriterion] = useState('');


    useEffect(() => {
        dispatch(requestEvents(page, limit));
    }, [])

    const onPageChange = (pageNumber) => {
        dispatch(actions.setPage(pageNumber));
        dispatch(requestEvents(pageNumber, limit));
    }

    return (
        <div className={s.container}>
            <div className={s.name}>Events</div>
            <div className={s.grid}>
                {events.map(event => (
                    <Event key={event.eventid} event={event} />
                ))}
            </div>
            <div style={{ padding: '0 5%' }}>
                <Paginator totalItemsCount={totalItemsCount} pageSize={limit} currentPage={page} onPageChange={onPageChange} />
            </div>
        </div>
    )
})

export default Events;