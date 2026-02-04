import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import AllRooms from './pages/AllRooms';
import Footer from './components/Footer';
import RoomDetails from './pages/RoomDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
//import { Analytics } from "@vercel/analytics/next"

function App() {

  return (
    <div className="flex flex-col min-h-screen"> 
      {/*<Analytics />*/}
      <Navbar />
      <div className="flex-grow"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          
        </Routes>
      </div>

      <Footer /> 
    </div>
  )
}

export default App;
