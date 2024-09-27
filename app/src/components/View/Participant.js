import React from 'react'
import s from './View.module.css';

const Participant = React.memo(({ participant }) => {
    return <div className={s.participant}>
        <div>{participant.fullname}</div>
        <div>{participant.email}</div>
    </div>
})

export default Participant