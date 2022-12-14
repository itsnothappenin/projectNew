import React, { useEffect, useState } from 'react'
import Slider from './Slider/Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";
import '../../Home/SliderList/Slider/Slider.css'
import eventsImg1 from './Slider/img/event1.jpg'
import eventsImg from './Slider/img/event.jpg'
import "swiper/css";
import "swiper/css/pagination";
import Moment from 'moment/moment';
import "./SliderList.css";
import calendar from './Slider/img/calendar.svg'

function SliderList() {
    const [swipers, setSwipers] = useState([])


    useEffect(() => {
        fetch('http://localhost:8080/admin/sliders')
            .then(res => res.json())
            .then(function (data) {
                setSwipers(data.data)
            })
    }, [])

    SwiperCore.use([Autoplay, Pagination, Scrollbar]);

    return (
        <>
            <div className='container'>
                <div className='iconAndTitle'>
                    <img src={calendar} alt="" className='calendarIcon' />
                    <h1 className='upcomingEvents'>Upcoming Events</h1>
                </div>
            </div>
            {
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    // direction={'horizontal'}
                    // loop={true}
                    // loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    // scrollbar={{draggable:true}}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                >

                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}


                    {swipers.map(slider => (
                        <SwiperSlide key={slider.id}>
                            <div>
                                {
                                    <div className='slider_1'>
                                        <div className='imgAndTitle'>
                                            <div><img className='sliderImage' src={slider.image} alt="" /></div>
                                            <h3 className='sliderTitle'>{slider.title}</h3>
                                        </div>
                                        <div className='description'>

                                            <h4 className='sliderDescription'>{slider.description}</h4>
                                            <span className='sliderDate'>Ba??lama tarixi: {Moment(slider.createdAt).format('DD-MM-YYYY, hh:mm')}</span>
                                            <span className='sliderDate'>Bitm?? tarixi: {Moment(slider.updatedAt).format('DD-MM-YYYY, hh:mm')}</span>

                                        </div>
                                    </div>
                                }
                            </div>
                        </SwiperSlide>
                    ))}


                    {/* <SwiperSlide>
                        {
                            swipers.map(swiper => {
                                return (<><Slider key={swiper._id} slider={swiper} /> </>)
                            })
                        }
                    </SwiperSlide> */}
                </Swiper>}
        </>

    )
}

export default SliderList