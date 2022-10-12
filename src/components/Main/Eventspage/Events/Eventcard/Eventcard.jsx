import './Eventcard.css'
import React from 'react'
import { Link } from 'react-router-dom'
import heart from './heart.svg'

const Eventcard = ({ event }) => {
    return (
        <Link to={`/events/${event._id}`}>
            <div className='event__card'>
                <div className="event__card__image">
                    <img src={event.eventImage} alt="" />
                </div>
                <div className="event__card__body">
                    <div>{event.thumbnail}</div>
                    <h2>{event.title}</h2>
                    <h4>{event.startTime}</h4>
                    <h4>{event.endTime}</h4>
                    <h4>{event.location}</h4>
                    <h3>{event.price} AZN</h3>
                    <div>
                        <button>wishlist<img src={heart} /></button>
                        <button>basket</button>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Eventcard