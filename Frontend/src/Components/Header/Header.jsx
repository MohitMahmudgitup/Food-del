import React from 'react'

import "./Header.css"

function Header() {
  return (
    <header>
        <div className="castom-header relative">
            <div className="castom-header-img w-[100%] md:h-[75vh] rounded-[50px]  overflow-hidden ">
              <img className=' w-full h-full object-cover object-center' src="https://img.freepik.com/premium-photo/black-pasta-with-vegetables-black-plate-top-view-black-background-free-copy-space_187166-39184.jpg" alt="" />
            </div>
            <div className="castom-headerText absolute text-white bottom-0 pl-20 pb-10 pr-52  ">
                <h1 className='f1 uppercase  text-[5.5vw]' >Order your</h1>
                <h1 className='f1 uppercase  text-[5.5vw]'>favourite food here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi, officiis labore sunt debitis explicabo nemo totam. Ducimus incidunt aspernatur, harum eos obcaecati reiciendis quaerat atque praesentium quam sit recusandae.</p>
                <button className="md:mt-10 btn-31 rounded-full ">
                    <span className="text-container">
                        <span className="f2 text ">View Menu</span>
                    </span>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header
