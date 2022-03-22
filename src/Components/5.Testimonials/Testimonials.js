import React from 'react'
import './Testimonials.css'
import {left,right} from '../../assets';

const Testimonials = () => {
  return (
    <div className="testi">
        <h6>TESTIMONIALS</h6>
        <h2>Words from our customers</h2>
        <div className="slider">
        <span className='left-triangle'></span>
          <span
          style={{transform:' translateX(-90px)','zIndex':'7'}}
          ><img className='slider-arrow' src={left} alt="left" /></span>
          <div>“Great rewards and have a excellent customer service.”</div>
          <span 
          style={{transform:' translateX(90px)','zIndex':'7'}}
          ><img className='slider-arrow' src={right} alt="right" /></span>
          <span className='right-triangle'></span>
        </div>

    </div>
  )
}

export default Testimonials;