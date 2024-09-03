import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/Explore-Menu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownland from '../../Components/App-Downland/AppDownland'
function Home() {
  const [category, setCategory]=useState(true)
  return (
<>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDisplay category={category}/>
    <AppDownland/>
</>
  )
}

export default Home
