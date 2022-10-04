import './Eventcard.css'
import React from 'react'
const Eventcard = ({event}) => {
    return (
        <div className='event__card'>
            <div className="event__card__image">
                <img src={event.eventImage} alt="" />
            </div>
            <div className="event__card__body">
                <h2>{event.title}</h2>
                <h4>{event.startTime}</h4>
                <h4>{event.endTime}</h4>
                <h4>{event.location}</h4>
                <h2>{event.price}</h2>
            </div>
        </div>
    )
}

export default Eventcard