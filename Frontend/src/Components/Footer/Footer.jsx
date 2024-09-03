import React from 'react'
import { assets } from '../../frontend_assets/assets'
import "./Footer.css"
function Footer() {
  return (
    <footer className='bg-slate-600 text-white  '>
      <div className='castom-footer flex justify-between py-20 m-auto w-[85vw] '>
        <div className='md:w-[500px]  '>
        <img className='castom-footer-logo w-28 rounded-xl ' src="https://logowik.com/content/uploads/images/bolt-food1662.jpg" alt="" />
          <p className='pl-1 text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum at assumenda, modi ad placeat nobis laboriosam adipisci dicta voluptatem! Vel, facilis omnis id debitis natus officiis pariatur expedita amet aliquam!</p>
          <div className='flex gap-4 mt-3'>
            <img className='castom-footer-img cursor-pointer' src={assets.facebook_icon} alt="" />
            <img className='castom-footer-img cursor-pointer' src={assets.twitter_icon} alt="" />
            <img className='castom-footer-img cursor-pointer' src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-dev2'>
          <h1 className='f2 text-2xl pb-5'>COMPANY</h1>
          <ul className='footer-navItems'>
                    <li className='f3 mt-1 pl-2 text-[.9vw] cursor-pointer hover:text-green-300 '>HOME</li>
                    <li className='f3 mt-1 pl-2 text-[.9vw] cursor-pointer hover:text-green-300 '>MENU</li>
                    <li className='f3 mt-1 pl-2 text-[.9vw] cursor-pointer hover:text-green-300 '>MOBILE-APP</li>
                    <li className='f3 mt-1 pl-2 text-[.9vw] cursor-pointer hover:text-green-300 '>CONTACT</li>
                </ul>
        </div>
        <div className='footer-dev3 gap-4'>
          <h1 className='f2 text-2xl pb-5'>GET IN TOUCH</h1>
          <p className='pl-2'>+8801835972300</p>
          <p className='pl-2'>mohitmahmud25@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
