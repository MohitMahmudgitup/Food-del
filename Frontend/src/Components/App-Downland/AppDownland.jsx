import React from 'react'
import "./AppDownland.css"
import { assets } from '../../frontend_assets/assets'
function AppDownland() {
  return (
    <>
      <div className='castom-AppDownland flex justify-center items-center flex-col py-20'>
        <h1 className='text-4xl text-center'>For Better Experience Download</h1>
        <h1 className='text-4xl'>Bolt-Food</h1>
        <div className='flex mt-10 gap-4'>
            <img className='castom-dow-app w-40 cursor-pointer' src={assets.play_store} alt="" />
            <img className='castom-dow-app w-40 cursor-pointer' src={assets.app_store} alt="" />
        </div>
      </div>
    </>
  )
}

export default AppDownland
