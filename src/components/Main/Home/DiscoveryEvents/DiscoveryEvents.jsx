import React from 'react'
import { Link } from 'react-router-dom'
import './DiscoveryEvents.css'

const DiscoveryEvents = () => {
    return (
        <div className="events-bottom">
            <p>NOT YOUR INTERESTED?</p>
            <Link to="/events"><button>DISCOVERY EVENTS</button></Link> 
        </div>
    )
}

export default DiscoveryEvents