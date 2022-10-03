import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Events from '../../components/Main/Eventspage/Events/Events';
import Filtering from '../../components/Main/Eventspage/Filtering/Filtering';
import './Eventspage.css'


function Eventspage() {
    return (
        <>
            <Header />
            <div className='title'>
                <h1>All Events</h1>
            </div>
            <Filtering />
            <Events />
            <Footer />
        </>


    )
}

export default Eventspage;