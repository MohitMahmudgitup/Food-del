import React, { useContext } from 'react'
import "./FoodItems.css"
import { assets } from '../../frontend_assets/assets'
import { StoreContext } from '../../Context/storeContext'

function FoodItems(props) {

  const {cartItem,addToCart,removeCart,backendURL} = useContext(StoreContext)
  return (
    <div  className='castom-item-box  relative w-[320px] h-[400px]  rounded-lg cursor-pointer m-2'>
      <div className="overflow-hidden">
        <img src={backendURL + "/image/" + props.image} alt="" />
      </div>
      {!cartItem[props.id]?

        <img className="top-[200px] right-7 absolute" onClick={()=>addToCart(props.id)} src={assets.add_icon_green} />

      :<div className='flex items-center absolute top-[195px] right-5  rounded-full gap-2 px-3 py-2 bg-green-200'>
        <img className='w-8' onClick={()=>removeCart(props.id)} src={assets.remove_icon_red}/>
        <p>{cartItem[props.id]}</p>
        <img className='w-8' onClick={()=>addToCart(props.id)} src={assets.add_icon_white}/>
      </div>

    }


      <div className='mt-4 px-5 w-full'>
        <div className='flex justify-between'>
            <p className='f2 text-lg'>{props.name}</p>
            <div className='flex justify-between items-center'>
            <img className='w-[80px] h-[15px] ' src={assets.rating_starts} alt="" />
            </div>
        </div>
        <div className='mt-3 relative'>
            <p className='pr-1 f3 text-sm text-gray-600'>{props.description}</p>
            <p className='pr-1 f2 text-2xl absolute text-green-700 right-0'>${props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItems
