import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
import { toast } from 'react-toastify';
function List({url}) {

  const [list,setList] = useState([])
  const fetchList = async () => {
    const response = await axios.get(url + "/api/food/list")
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error(response.data.data.message)
    }
  }
  const onClickDelete = async (itemId) => {
    const response = await axios.post(url + "/api/food/remove" , {_id:itemId})
    await fetchList()
    toast.success(response.data.message)
  }
  useEffect( () => {
    fetchList()
    
  }, [] )

  return (
    <section className='w-full md:w-[75vw] md:p-0'>
      <div className='flex justify-between f2 md:px-2 py-4 '>
        <h1 className=' text-center'>Image</h1>
        <h1 className='w-40 text-center'>Name</h1>
        <h1 className='w-40 text-center'>Category</h1>
        <h1 className='w-40 text-center'>Price</h1>
        <h1 className='w-40 text-center'>Action</h1>
      </div>
      <hr />
      {list.slice().reverse().map( ( item , index )=>{
        return(
          <>
          <div key={index} className='flex justify-between f3 items-center text-center md:p-2 rounded-md hover:bg-gray-50' >
           <div className='w-14 h-14 rounded-md overflow-hidden '>
           <img className='w-full h-full object-cover ' src={`${url}/image/`+item.image} alt="" />
           </div>
           <p className='w-40 text-center'>{item.name}</p>
           <p className='w-40 text-center'>{item.category}</p>
           <p className='w-40 text-center'>{item.price}</p>
           <div className='w-40 flex justify-center items-center'>
           <div onClick={()=>onClickDelete(item._id)} className='w-9 flex cursor-pointer justify-center items-center h-9 border border-1 border-black rounded-full hover:bg-gray-300'>
           <p className=' text-center f2  font-bold text-xl'>x</p>
           </div>
           </div>
          </div>
          <hr />
          </>
        )
        
      })}

    </section>
  )
}

export default List
