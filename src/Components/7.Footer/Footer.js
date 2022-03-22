import React from 'react'
import './Footer.css'
import {logo,
  tag,
  appstore,
  gplay} from '../../assets'
const Footer = () => {
  return (
    <div className="footer">
      <div className='tab1'>
        <img src={logo} className='flogo' alt="logo" />
        <p>We envision a world where employees are highly engaged and very happy at their work. Join us in our journey today!</p>
        <img  className='tag' src={tag} alt="line" />
      </div>
      <div className='tab2'>
        <ul>
          <li><h3 >About</h3></li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Career</li>
        </ul>
      </div>
      <div className='tab3'>
        <ul>
          <li><h3>Legal</h3></li>
          <li>Term of use</li>
          <li>Privacy policy</li>
        </ul>
        </div>
      <div className='tab4'>
        <h3>Download from app</h3>
        <p>Takes just 30sec to download !</p>
        <img src={gplay} className='downlinks' alt="playstore" />
        <img src={appstore} className='downlinks' alt="appstore" />
        </div>
    </div>
  )
}

export default Footer