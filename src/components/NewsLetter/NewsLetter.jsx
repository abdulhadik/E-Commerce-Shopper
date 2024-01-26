import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS</h1>
      <p>Subscribe to our newsletter and staty updated</p>
      <div>
      <input type="email" placeholder='Your Email-id'/>
      <button>Subscribe</button></div>
    </div>
  )
}

export default NewsLetter
