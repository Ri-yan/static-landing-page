import React from 'react'
import './Partners.css'
import {lines} from '../../assets';

const Partners = () => {
  return (
    <div className="partners">
        <h6>OUR PARTENERS IN EXPANSION</h6>
        <h2>Running successfully with 50+ Indian Companies</h2>
        <img style={{height: '10em',
    width: '-webkit-fill-available'
}} src={lines} alt="img" />
    </div>
  )
}

export default Partners;