import React from 'react'
import "./app.css"
import Sidber from './Components/Sidber/Sidber'
import Navber from './Components/Navber/Navber'
import Add from './Pages/Add/Add'
import { Route, Routes } from 'react-router-dom'
import Orders from './Pages/Orders/Orders'
import List from './Pages/List/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const url = "http://localhost:3000"
  return (
    <>
    <ToastContainer/>
    <Navber/>
     <hr />
     <main className='main flex'>
      <Sidber/>
      <div className='router-box'>
        <Routes>
          <Route path='/' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/order' element={<Orders url={url}/>}/>
        </Routes>
      </div>
      
     </main>
    </>
  )
}

export default App
