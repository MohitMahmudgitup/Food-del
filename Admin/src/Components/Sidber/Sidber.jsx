import React from 'react'
import "./Sideber.css"
import {assets} from "../../admin_assets/assets";
import { NavLink } from 'react-router-dom';
function Sidber() {
  return (
    <aside className= 'aside flex  gap-4'>
        <NavLink to={"/"} className='site-name-box flex items-center gap-2  rounded-lg cursor-pointer'>
            <img className='w-7 h-7' src={assets.add_icon} alt="" />
            <h1 className='font-semibold md:text-xl'>Add Items</h1>
        </NavLink>
        <NavLink to={"/list"} className='site-name-box flex items-center gap-2 rounded-lg cursor-pointer'>
            <img className='w-7 h-7' src={assets.order_icon} alt="" />
            <h1 className='font-semibold md:text-xl'>List Items</h1>
        </NavLink>
        <NavLink to={"/order"} className='site-name-box flex items-center gap-2  rounded-lg cursor-pointer'>
            <img className='w-7 h-7' src={assets.order_icon} alt="" />
            <h1 className='font-semibold md:text-xl'>Orders</h1>
        </NavLink>
    </aside>
  )
}

export default Sidber
