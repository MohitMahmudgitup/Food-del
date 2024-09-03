import React, { useContext } from 'react'
import "./Navber.css"
import "../../index.css"
import { assets } from '../../frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/storeContext'
function Navber(props) {
    const {token , setToken} = useContext(StoreContext)
    const navigate = useNavigate()
    const onLogout = () =>{
        localStorage.removeItem("Token");
        setToken("")
        navigate("/")
    }
  return (
    <header className=''>
        <nav className='castom-nav f2 w-[100%] flex justify-between items-center '>
            <Link to={"/"}><img className='w-28 h-20' src="https://logowik.com/content/uploads/images/bolt-food1662.jpg" alt="" /></Link>
            <div>
                <ul className='castom-navItems flex gap-4'>
                    <li className='f1  text-[1.1vw] cursor-pointer hover:text-green-300 '>HOME</li>
                    <li className='f1  text-[1.1vw] cursor-pointer hover:text-green-300 '>MENU</li>
                    <li className='f1  text-[1.1vw] cursor-pointer hover:text-green-300 '>MOBILE-APP</li>
                    <li className='f1  text-[1.1vw] cursor-pointer hover:text-green-300 '>CONTACT</li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <img className='w-7 h-7 cursor-pointer' src={assets.search_icon} alt="" />
                <Link to={"/cart"} className="relative">
                <img className='w-7 h-7 cursor-pointer' src={assets.basket_icon} alt="" />
                <div className=" bg-green-300 text-xs -top-2  px-2 rounded-xl -right-3 absolute ">1</div>
                </Link>

                {!token?<button onClick={()=>props.setShowLogin(p=>!p)} className="btn-31 rounded-full ">
                    <span className="text-container">
                        <span className="f2 text">sign up</span>
                    </span>
                </button>
                :
                <div className='navber-profile cursor-pointer relative'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-dorpdown  ">
                        <li className=""> <img src={assets.bag_icon} alt="" /><p>Order</p></li>
                        <hr />
                        <li onClick={onLogout} className=""> <img src={assets.logout_icon} alt="" />Logout</li>
                    </ul>
                </div>
                }
                
            </div>
        </nav>
    </header>
  )
}

export default Navber
