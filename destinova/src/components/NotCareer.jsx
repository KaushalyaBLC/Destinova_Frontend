import React from 'react'
import Logo from '../assets/coloredlogo.png'
import CareerBot from './CareerBot'

const NotCareer = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '60vh'}}>
      <img src={Logo} alt="" width={100}/>
      <h5>Invalid Career Name</h5>
      <p className='text-secondary'>Please enter a valid career name</p>
      <CareerBot/>
    </div>
  )
}

export default NotCareer