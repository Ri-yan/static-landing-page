import './Cover.css';
import { coverphone2} from '../../assets';
const Cover = () => {
  return (
    <div className='cover'>
        <div className="cover_details">
            <h1><span style={{color:'#513164'}}>Provide</span> Unmatched Perks <br/> <span style={{color:'#513164'}}>and</span> Retain Top Talent</h1>
            <p>Our flexible employee benefit programmes can help employees save money on taxes. Simply replace meal coupons, food cards, gasoline cards, vacation vouchers, and gift cards with a single card to digitise your employee tax benefits programme.
            <br/>Add tax-free perks to the card online to help your employees save money on taxes.
            </p>
            <div className='arrow'><span className='cornered'></span><span style={{color:'#2D4FA8'}}> Recognized by </span> <span style={{color:'orange'}}> #startupindia </span></div>
        </div>
        <img className='cover_img' src={coverphone2} alt="phone" />
    </div>
  )
}

export default Cover