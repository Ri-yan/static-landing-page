import React from 'react'
import './Need.css'
import {benefitdata} from '../../data/benefitdata'

const Need = () => {
  return (
     
    <div className="need corner">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320"><path fill="#dde4f8" 
      fill-opacity="1" d="M 0 100 L 400 0 L 800 100 "></path></svg> */}
        <h6 className='sub-head'>NEED</h6>
        <h2>Why Employee Benefit is important ?</h2>
        <div className="card-list">
            {
                benefitdata.map((b,key)=>{
                    return(
                        <div className="card" key={key}>
                            <div className='block' >
                                <img src={b.img_src} className={b.img_class} alt="" />
                                <p className='block_percentage'>{b.number}</p>
                            </div>
                            <p className='block_head'>{b.content}</p>
                        </div>
                    );
                })
            }
        </div>
        

    </div>
    
  )
}

export default Need