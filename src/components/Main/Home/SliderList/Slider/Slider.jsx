import React from 'react'

const Slider = (props) => {
    const slider = props.slider
    return (
        <div>
            {
                <div className='slider_1'>
                    <img src={slider.thumbnail} alt="" />
                    <h3>{slider.title}</h3>
                    <h4>{slider.description}</h4>
                    <h5>{slider.createdAt}</h5>
                    <h5>{slider.updatedAt}</h5>
                </div>
            }
        </div>
    )
}

export default Slider