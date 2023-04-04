import React from 'react'
import NavbarComp from './NavbarComp'
import RSlider from './RSlider'
import SideBar from './SideBar'


const Home = () => {
  return (
    <>
     <div style={{display:'flex',justifyContent:'space-between', marginTop:10}}>
     <SideBar/>
     <RSlider/> 
     </div>
    </>
  )
}

export default Home
