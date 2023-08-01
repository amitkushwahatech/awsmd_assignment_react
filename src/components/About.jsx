import React from 'react'
import SolidStratgy from './SolidStratgy'
import LogoMove from './LogoMove'
import SmartMob from './SmartMob'

const About = () => {
  return (
    <>
      <h2 className='h_title'>02 - About Us</h2>

{/* head part  */}
      <div className='about_head'>
        <h1>We Strive to Innovate</h1> 
        
        <button className="about_head_button ">
        Become A Client
        </button>
      </div>

     <SolidStratgy  />

     <LogoMove/>

     <SmartMob/>


    </>
  )
}

export default About