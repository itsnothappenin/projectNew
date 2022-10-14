import React, { useState, useEffect } from 'react'
import Slider2 from './Slider2/Slider2'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import bookmark from './../SliderList2/img/bookmark.svg'
import eventsImg1 from './../SliderList2/img/event1.jpg'
import eventsImg from './../SliderList2/img/event.jpg'
import Moment from 'moment/moment';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderList2.css";


function SliderList2() {
    const [swipers, setSwipers] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/admin/sliders')
            .then(res => res.json())
            .then(function (data) {
                setSwipers(data.data)
            })
    }, [])
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    return (
        <>
            <div className='secondSlider'>
                <div className='container2'>
                    <div className='iconAndTitle2'>
                        <img src={bookmark} alt="bookmark" className='bookmarkIcon' />
                        <h1 className='featuredEvents'>Featured Events</h1>
                    </div>
                </div>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "green",
                        "--swiper-navigation-size": "35px",
                    }}
                    spaceBetween={30}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    loop={true}
                    // loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
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

                    {swipers.map(slider2 => (
                        <SwiperSlide key={slider2.id}>
                            <div>
                                {
                                    <div className='slider_2'>
                                        <div className='imgAndTitle2'>
                                            <div><img className='sliderImage2' src={slider2.image} alt="" /></div>
                                            <h3 className='sliderTitle2' >{slider2.title}</h3>
                                        </div>
                                        <div className='slider2part2'>
                                            <h4 className='sliderDescription2'>{slider2.description}</h4>
                                            <h5 className='sliderDate2'>Created at: {Moment(slider2.createdAt).format('DD-MM-YYYY, hh:mm')}</h5>
                                            <h5 className='sliderDate2'>Updated at: {Moment(slider2.createdAt).format('DD-MM-YYYY, hh:mm')}</h5>
                                        </div>
                                    </div>
                                }
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* <SwiperSlide>
                {
                    swipers.map(swiper => {
                        return (<Slider2 key={swiper._id} slider={swiper} />)
                    })
                }
            </SwiperSlide> */}
                </Swiper>
            </div>
        </>
    )
}

export default SliderList2