import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Eventspage from './pages/Eventspage/Eventspage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Eventcard from './components/Main/Eventspage/Events/Eventcard/Eventcard';
import EventDetail from './pages/Eventspage/Detail/EventDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Eventspage />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
