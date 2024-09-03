import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../Context/storeContext'
import FoodItems from '../FoodItems/FoodItems'
function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
  return (
    <section>
      <h1 className='my-10 f2 text-3xl'>Top dishes near you</h1>
      <div className='castom-foodDisplay flex justify-between flex-wrap'>
        {
          food_list.map((item,index)=>{
            if (category === true  || category===item.category ) {
              return <FoodItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
            }
          
          })
        }

      </div>
    </section>
  )
}

export default FoodDisplay
