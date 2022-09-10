import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Eventspage from './pages/Eventspage/Eventspage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Eventspage />} />
          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
