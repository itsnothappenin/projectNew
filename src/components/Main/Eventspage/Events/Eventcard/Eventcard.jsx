import './Eventcard.css'
import React from 'react'
import { Link } from 'react-router-dom'
import damla from './damla.jpg'


const Eventcard = ({ event }) => {
    return (
        <Link to={`/events/${event._id}`}>
            <div className='event__card'>
                <div className="event__card__image">
                    <img className='damla' src={damla} alt="" />
                </div>
                <div className="event__card__body">
                    <div >{event.thumbnail}</div>
                    <h2 className='eventTitle'>{event.title}</h2>
                    <h3 className='eventLoc'>{event.location}</h3>
                    <h5 className='startTime'>Başlama tarixi: {event.startTime}</h5>
                    <h5 className='endTime'>Bitmə tarixi: {event.endTime}</h5>
                    <h3 className='eventPrice'>Qiymət: {event.price} AZN</h3>  
                </div>
            </div>
        </Link>
    )
}

export default Eventcard