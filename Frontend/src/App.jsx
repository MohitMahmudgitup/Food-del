import React, { useState } from 'react'
import Navber from './Components/Navber/Navber'
import Home from "./Pages/Home/Home.jsx"
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Cart from "./Pages/Cart/Cart.jsx"
import Footer from './Components/Footer/Footer.jsx'
import "./app.css"
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    <ToastContainer/>
    {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
    <main className='castom-app-main w-[85vw]'>
      <Navber setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeOrder' element={<PlaceOrder/>} />
      </Routes>
    </main>
    <Footer/>
    </>

  )
}

export default App
