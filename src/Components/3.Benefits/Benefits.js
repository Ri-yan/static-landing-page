import './Benefits.css'
import { BenefitCard } from '../../data/BenefitCard'
const Benefits = () => {
  return (
    <div className="benefits">
        <h6>BENEFITS</h6>
        <h2>Why Benifit Wise ?</h2>
        <div className="slab-list">
        {
            BenefitCard.map((i,key)=>{
              return(
                <div key={key} className={`slabs${i.direction}`}>
                  <img  src={i.slab_img} alt="medal" />
                  <div>
                    <h3>{i.heading}</h3>
                    <p>{i.para}</p>
                  </div>
                </div>  
              )
            })
          }
        </div>
        <button>Learn More</button>

        </div>
  )
}

export default Benefits;