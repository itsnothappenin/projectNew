import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from '../Slider/Slider'

const SliderList = () => {
    const [swipers, setSwipers] = useState([])
    // useEffect(() => {
    //     fetch(ApiEndPoint)
    //         .then(res => res.json())
    //         .then(data => setSwipers(data))
    // }, [])

    return (
        <div>
            {
                swipers.map(slider => {
                    <Slider slider={slider} />
                })
            }
        </div>
    )
}

export default SliderList