import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Register from './Components/Register/Register'
import Login from './Components/Register/FormPage'
import More from './Components/More/More'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/about' element={<About  />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/more' element={<More/>} /> */}
      </Routes>
    </BrowserRouter>
  )
};

export default App;