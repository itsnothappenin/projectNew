import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import heart from './heart.svg'
import './Detail.css'
import damla from './damla.jpg'
import basket from'./cart.svg'
import arrowLeft from './arrleft.svg'
import Moment from "moment/moment";


const EventDetail = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});
  let id = useParams();
  useEffect(() => {
    axios.get("http://localhost:8080/events").then((res) => {
      const i = id.id;
      setEvent(res.data.data.find((x) => x._id == i));
    });
  }, []);

  return (
    <>
      <Header />
      <Link to="/events"><button className="back"><img className="arrLeft" src={arrowLeft} alt="" /></button></Link>
      <div className="event__card__detail">
        <div className="event__card__image__det">
          <img className='detImage' src={event.eventImage} alt="" />
        </div>
        <div className="event__card__body__det">
          <div className="det1">
            <h1 className="eventTitleDet">{event.title}</h1>
            <h2 className="eventLocDet">{event.location}</h2>
            <h4 className="startTimeDet"> Başlama tarixi: {Moment(event.startTime).format('DD-MM-YYYY, hh:mm')}</h4>
            <h4 className="endTimeDet">Bitmə tarixi: {Moment(event.endTime).format('DD-MM-YYYY, hh:mm')}</h4>
            <h3 className="eventPriceDet">Qiymət: {event.price}AZN</h3>
          </div>
          <div className="det2">
            <button className="but">Add to wishlist  <img className="azzar" src={heart} /></button>
            <button className="but">Add to cart  <img className="azzar" src={basket} alt="" /></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;
