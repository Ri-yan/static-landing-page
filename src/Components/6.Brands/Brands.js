import React from 'react'
import './Brands.css'
import {brands } from '../../assets';

const Brands = () => {
  return (
    <div className="brands">
        <h6>BRAND PARTNERS</h6>
        <h2>Providing best with 500+ Brand partners</h2>
        <img src={brands} alt="brands" />

    </div>
  )
}

export default Brands;