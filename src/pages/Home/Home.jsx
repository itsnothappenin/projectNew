import React from 'react'
import SliderList from '../../components/Main/Home/SliderList/SliderList'
import Cards from '../../components/Main/Home/Cards/Cards'
import SliderList2 from '../../components/Main/SliderList2/SliderList2'
import DiscoveryEvents from '../../components/Main/Home/DiscoveryEvents/DiscoveryEvents'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Cards />
            <SliderList />
            <SliderList2 />
            <DiscoveryEvents />
            <Footer />
        </div>
    )
}

export default Home