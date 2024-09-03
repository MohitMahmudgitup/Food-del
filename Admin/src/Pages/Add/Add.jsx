import React, { useState } from 'react'
import "./Add.css"
import {assets} from "../../admin_assets/assets"
import axios from "axios"
import { toast } from 'react-toastify';

function Add({url}) {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad",
  });
  const onChangeHendler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const onSubmitHendler = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("name" , data.name);
    formData.append("description" , data.description); 
    formData.append("category" , data.category); 
    formData.append("price" , Number(data.price)); 
    formData.append("image" , image); 
    const respons = await axios.post(`${url}/api/food/add`,formData)
    if(respons.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false)
      toast.success(respons.data.message)
    }
    else{
      toast.error(respons.data.error)
    }
    
  }


  return (
    <section>
      <form action="" className=' castom-form' onSubmit={onSubmitHendler}>
        <div className='flex flex-col gap-2 mt-2'>
          <h1 className='f1'>Upload Image</h1>
          <div className='border border-1 border-black w-28 rounded-xl '>
          <label htmlFor="image">
            <img className='rounded-xl cursor-pointer' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} id="image" type="file" hidden required />
          </div>

        </div>
        <div className='flex flex-col gap-2 mt-2'>
          <h1 className='f1'>Product name</h1>
          <input onChange={onChangeHendler} value={data.name} className='outline-none p-1 border border-1 border-black rounded-md f4 w-[100%]' type="text" placeholder='Type here...' name='name' required/>
        </div>
        <div className='flex flex-col gap-2 mt-2'>
          <h1 className='f1'>Product Description</h1>
          <textarea onChange={onChangeHendler} value={data.description} className='outline-none p-1 border border-1 border-black rounded-md f4 w-[100%]' type="text" cols="30" rows="5" placeholder='Description...' name='description' required/>
        </div>
        <div className='flex justify-between flex-col md:flex-row'>
          <div className='flex flex-col gap-2 mt-2'>
            <h1 className='f1'>Product category</h1>
            <select onChange={onChangeHendler} value={data.category} className='outline-none p-1 border border-1 border-black rounded-md f4 ' name='category' required>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='flex flex-col gap-2 mt-2'>
            <h1 className='f1'>Product price</h1>
            <input onChange={onChangeHendler} value={data.price} className='outline-none p-1 border border-1 border-black rounded-md f4 ' type="number" placeholder='$' name='price' required/>
          </div>
        </div>
        <button  className='outline-none p-1 border border-1 border-black rounded-md f4 w-[100%] mt-3 bg-black text-white hover:bg-slate-800' type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Add
