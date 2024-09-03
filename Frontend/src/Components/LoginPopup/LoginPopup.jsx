import React, { useContext,useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../frontend_assets/assets'
import { StoreContext } from '../../Context/storeContext'
import axios from 'axios';
import { toast } from 'react-toastify';
function LoginPopup(props) {
  const {backendURL , setToken} = useContext(StoreContext)

  const[ log , setLog ]= useState("Sign Up")

  const[ data , setData ]= useState({
    username : "" ,
    email : "",
    password : ""
  })

  const onClickHendler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  }
  
const onLogin = async (event) => {
  event.preventDefault();
  
  let newURL = backendURL;
  
  if (log === "Sign Up") {
    newURL += "/user/register";
  } else if (log === "Login") {
    newURL += "/user/login";
  }

  try {
    const response = await axios.post(newURL, data);
  
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("Token", response.data.token);
      props.setShowLogin(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error("An error occurred while processing your request. Please try again.");
  }
  
};

  
  
  return (
    <>
    <div  className='castom-log fixed w-[100%] h-[100vh] flex justify-center items-center z-50'>
      <form onSubmit={onLogin} className='w-[400px] rounded-xl p-10 bg-white'  action="post">
        <div className='flex justify-between'>
          <h1 className='text-2xl font-semibold text-green-400' >{log}</h1>
            <div className='hover:bg-slate-200 cursor-pointer flex rounded-full justify-center items-center w-8 h-8'>
            <img onClick={()=>props.setShowLogin()} src={assets.cross_icon} alt="" />
            </div>
        </div>
        <div className='mt-6'>
          <div className=''>
            {log == "Sign Up" ? <input className='mt-3 w-full border border-1  outline-none p-2 rounded-xl' type='text' placeholder='User Name'  name='username' onChange={onClickHendler} value={data.username}/>:<></>}
            <input className='mt-3 w-full border border-1  outline-none p-2 rounded-xl' type="email" placeholder='Email' name='email' onChange={onClickHendler} value={data.email}/>
            <input className='mt-3 w-full border border-1  outline-none p-2 rounded-xl' type="password" placeholder='Password' name='password' onChange={onClickHendler} value={data.password} />
          </div>
          <button type="submit" className='mt-3 w-full border border-1  outline-none p-2 rounded-xl bg-green-300 hover:bg-green-400'>{log == "Sign Up" ? "Create account":"Login"}</button>
          <div className=' flex items-start mt-9 gap-4'>
            <input className='bg-slate-400' type="checkbox" name="" id="" required />
            <p className='text-sm -mt-1'>By continuing , i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
       <div className='mt-9'>
        {log =="Sign Up"? <p className="cursor-pointer text-sm" onClick={()=>setLog("Login")}>Already have an account?<span className='f2 ml-2 text-green-300 hover:text-green-500'>Login here</span></p>
        :
        <p className="cursor-pointer text-sm" onClick={()=>setLog("Sign Up")}>Create a new account?<span className='f2 ml-2 text-green-300 hover:text-green-500'>Click here</span></p>
      }
          
          
          
       </div>

      </form>
    </div>

    </>
  )
}

export default LoginPopup
