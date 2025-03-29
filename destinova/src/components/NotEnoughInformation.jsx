import React from 'react'
import Bot from '../assets/botimg/bot.gif'
import { useNavigate } from 'react-router-dom'

const NotEnoughInformation = () => {
  const navigate = useNavigate();
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '60vh'}}>
      <h5>Not Enough Information</h5>
      <p className='text-secondary'>Given Information is Not Enough, Please Try Again!</p>
      <img src={Bot} alt="" width={200}/>
      <button className='btn btn-danger mt-2' onClick={()=>{navigate('/meet-nova')}}>Try Again</button>
    </div>
  )
}

export default NotEnoughInformation