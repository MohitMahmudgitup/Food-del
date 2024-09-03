import React from 'react'
import "./Navber.css"
import {assets} from "../../admin_assets/assets";

function Navber() {
  return (
    <nav className=' flex justify-between items-center px-10'>
        <img className='w-28 h-20' src="https://logowik.com/content/uploads/images/bolt-food1662.jpg" alt="" />
        {/* <p className='f2 text-[2vw] text-green-300'>Admin Panel</p> */}
        <div>
            <img className='w-10 h-10' src={assets.profile_image} alt="" />
        </div>
    </nav>

  )
}

export default Navber
