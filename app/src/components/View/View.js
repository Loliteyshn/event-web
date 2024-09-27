import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actions, requestParticipants } from '../../redux/events-reducer';
import { getLimit, getPage, getParticipants, getTotalItemsCount } from '../../redux/events-selector';
import s from './View.module.css';
import Participant from './Participant';
import { Link } from 'react-router-dom';
import Paginator from '../Paginator/Paginator';

const View = React.memo(() => {
  const { eventid } = useParams();
  const dispatch = useDispatch();
  const participants = useSelector(getParticipants);
  const page = useSelector(getPage);
  const limit = useSelector(getLimit);
  const totalItemsCount = useSelector(getTotalItemsCount);

  useEffect(() => {
    dispatch(requestParticipants(eventid, page, limit));
  }, [])

  const onPageChange = (pageNumber) => {
    dispatch(actions.setPage(pageNumber));
    dispatch(requestParticipants(eventid, pageNumber, limit));
  }

  return <>
    <Link to='/' style={{ color: '#000', padding: '5%' }}>Events</Link>
    <div className={s.container}>
      <h3 style={{ fontWeight: 'normal' }}>"Awesome Event" participants</h3>
      <div className={s.grid}>
        {participants.map(p => (
          <Participant key={p.participantid} participant={p} />
        ))}
      </div>
      <div className={s.paginator}>
        <Paginator totalItemsCount={totalItemsCount} pageSize={limit} currentPage={page} onPageChange={onPageChange} />
      </div>
    </div>
  </>

})

export default View