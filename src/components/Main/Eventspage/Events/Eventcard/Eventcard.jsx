import './Eventcard.css'
import React from 'react'
import { Link } from 'react-router-dom'
import damla from './damla.jpg'
import Moment from 'moment'

const Eventcard = ({ event }) => {
    return (
        <Link to={`/events/${event._id}`}>
            <div className='event__card'>
                <div className='ok'>
                    <img className="event__card__image" src={event.eventImage} alt="" />
                </div>
                <div className="event__card__body">
                    <h2 className='eventTitle'>{event.title}</h2>
                    <h3 className='eventLoc'><b>Məkan: </b>{event.location}</h3>
                    <h5 className='startTime'><b>Başlama tarixi:</b> {Moment(event.startTime).format('DD-MM-YYYY, hh:mm')} </h5>
                    <h5 className='endTime'><b>Bitmə tarixi:</b> {Moment(event.endTime).format('DD-MM-YYYY, hh:mm')}</h5>
                    <h3 className='eventPrice'><b>Qiymət:</b> {event.price} AZN</h3>  
                </div>
            </div>
        </Link>
    )
}

export default Eventcard