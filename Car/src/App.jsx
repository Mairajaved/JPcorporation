import React from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Footer from './components/Footer'
import Singleproduct from './pages/Singleproduct'
import AllCars from './pages/AllCars'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single-product" element={<Singleproduct />} />
        <Route path="/allcars" element={<AllCars />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App