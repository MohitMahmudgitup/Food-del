
import React from 'react'
import "./ExploreMenu.css"
import "./ExploreMenu.css"
import { menu_list } from '../../frontend_assets/assets'
function ExploreMenu(props) {
  return (
    <section>
      <div className='castom-exlore mt-10'>
        <div>
          <h1 className='f2 text-3xl'>Explore our menu</h1>
          <p className='f3 text-xl pt-3 pr-32'>Choose from a diverse menu featuring a delectable array of disheb. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        </div>
        <div className='castom-explrebox flex justify-between mt-16 gap-4 '>
      {menu_list.map((item,index)=>{
        return(
            <div key={index} onClick={()=>props.setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} className='flex flex-col justify-center items-center cursor-pointer '>
              <div className={`${props.category === item.menu_name && "active" } transition-all  overflow-hidden rounded-full w-32 h-32 `}>
                <img className="rounded-full w-full h-full object-cover object-center" src={item.menu_image} alt="" />
              </div>
                <p className='f4 text-[1.5vw]'>{item.menu_name}</p>
            </div>
        )
      })}
        </div>

        <hr className='my-4' />



      </div>
    </section>

  )
}

export default ExploreMenu
