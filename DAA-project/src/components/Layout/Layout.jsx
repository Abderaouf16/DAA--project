import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'


import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup' 
import Projects from '../../pages/Projects'

export default function 
() {
  return (
    <>
        
        <Header/>
        
  <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/login'home element={<Login/>} />
    <Route path='/signup'home element={<Signup/>} />
  </Routes>
        
        <Footer/>
  
   </>
  )
}
