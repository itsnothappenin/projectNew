import React from 'react'
import SliderList from '../../components/Main/Home/SliderList/SliderList'
import Cards from '../../components/Main/Home/Cards/Cards'
import SliderList2 from '../../components/Main/SliderList2/SliderList2'

const Home = () => {
    return (
        <div>
            <SliderList />
            <Cards />
            <SliderList2 />
        </div>
    )
}

export default Home