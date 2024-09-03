import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/storeContext'
import { useNavigate } from 'react-router-dom'
function PlaceOrder() {
  const navogate = useNavigate()
  const {cartItem,food_list,removeCart,getTotalCartAmaunt}= useContext(StoreContext)
  return (
    <form className='place-order h-[90vh]'  action="">
        <div className='place-order-left w-[50%]'>
          <h2 className='f2 text-3xl'>Delivery Information</h2>
          <div className='flex justify-between gap-2 pt-10'>
            <input className='f4' type="text" placeholder='Fast name'/>
            <input className='f4' type="text" placeholder='Last name'/>
          </div>
          <input className='f4' type="email" placeholder='Email address'/>
          <input className='f4' type="text" placeholder='Street'/>
          <div className='flex justify-between gap-2'>
            <input className='f4' type="text" placeholder='City'/>
            <input className='f4' type="text" placeholder='State'/>
          </div>
          <div className='flex justify-between gap-2'>
            <input className='f4' type="text" placeholder='Zip code'/>
            <input className='f4' type="text" placeholder='Country'/>
          </div>
          <input className='f4' type="number" placeholder='Number'/>
        </div>
        <div className='place-order-right w-[50%] p-10'>

          <h1 className='f2 text-4xl '>Cart Totals</h1>
            <div className='flex justify-between px-2 items-center pt-10'>
              <h2>Subtotal</h2>
              <p>${getTotalCartAmaunt()}</p>
            </div>
            <div className='flex justify-between px-2 items-center my-4'>
              <h2>Delivery Fee</h2>
              <p>$20</p>
            </div>
              <hr className='border border-1 border-slate-400' />
            <div className='f2 flex justify-between px-2 items-center mt-4'>
              <h2>Totel</h2>
              <p>${getTotalCartAmaunt()+20}</p>
            </div>
          
        </div>
    </form>
  )
}

export default PlaceOrder
