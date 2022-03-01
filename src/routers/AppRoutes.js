import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Production from '../pages/Production';
import About from '../pages/About';
import Contact from '../pages/Contact';


const AppRoutes = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<App />}>
                      <Route index element={<Home />} />
                      <Route path='Production' element={<Production/>}/>
                      <Route path='About' element={<About/>}/>
                      <Route path='Contact' element={<Contact/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default AppRoutes