import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/storeContext'
import { useNavigate } from 'react-router-dom'
function Cart() {
  const navogate = useNavigate()
  const {cartItem,food_list,removeCart,getTotalCartAmaunt,backendURL}= useContext(StoreContext)
  return (
    <div className='pt-20'>
      <div className='castom-cart '>
        <div className='flex justify-between items-center'>
          <p className='castom-titel-name w-40 text-center font-semibold'>Items :</p>
          <p className='castom-titel-name w-40 text-center font-semibold'>Titel :</p>
          <p className='castom-titel-name w-40 text-center font-semibold'>Price :</p>
          <p className='castom-titel-name w-40 text-center font-semibold'>Quantity :</p>
          <p className='castom-titel-name w-40 text-center font-semibold'>Totel :</p>
          <p className='castom-titel-name w-40 text-center font-semibold'>Remove :</p>
        </div>
      <br />
      <hr/>
      {food_list.map((item,index)=>{
        if(cartItem?.[item._id]>0){
          {
            return(
              <>
              <div key={index} className='castom-cart-item flex justify-between items-center m-2'>
                <div className='w-40 flex justify-center'>
                  <img className='w-10 h-10 rounded-lg' src={backendURL+"/image/"+item.image} alt="" />
                </div>
                <p className='castom-titel-name w-40 text-center'>{item.name}</p>
                <p className='castom-titel-name w-40 text-center'>${item.price}</p>
                <p className='castom-titel-name w-40 text-center'>{cartItem?.[item._id]}</p>
                <p className='castom-titel-name w-40 text-center'>${item.price*cartItem?.[item._id]}</p>
                <p onClick={()=>removeCart(item._id)} className='w-40 text-center cursor-pointer'>x</p>
              </div>
                <hr/>
              </>
              
            )
          }
        }
      })}
      </div>
      <div className=' castom-all-promo my-40 flex justify-center'>
        <div className='w-[100%] md:w-[50%]'>
          <h1 className='f2 text-4xl'>Cart Totals</h1>
            <div className='flex justify-between px-2 items-center mt-4'>
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
            <button onClick={()=>navogate("/placeOrder")} className='mt-10 text-white bg-green-700 hover:bg-green-300 px-5 py-2 rounded-xl'>PROCEED TO CHECKOUT</button>
          </div>
          <div className='md:w-[50%] flex justify-center items-center flex-col pb-20'>
            <h2 className='f2 pb-10'>If you have a promo code .Enter it here... </h2>
            <div className='castom-promo-input flex justify-between overflow-hidden'>
              <input className="outline-none w-[100%] px-2 " type="text" name="" id="" />
              <button className='castom-buttom px-5 py-2'>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart
