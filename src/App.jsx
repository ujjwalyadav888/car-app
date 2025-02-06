import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/home/home'
import Services from './pages/services/services'
import About from './pages/about/about'
import CarCompany from "./pages/carcompany/carcompany"
import Car from './pages/car'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path='/carcompany/:carbrand' element={<CarCompany />} />
          <Route path="/cars/:carmodel" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App