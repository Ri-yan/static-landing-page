import React from 'react'
import './Navigation.css'
import {logo} from '../../assets'
import {navdata} from '../../data/navdata'

const Navigation = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          <img src={logo} alt="logo" />
          {/* <span>Benefit</span><span>Wise</span> */}
          </div>
        {
            navdata.map((item,key)=>{
                return(
                <div key ={key} className="nav_item">
                    {item.name}
                </div>)
            }
            )
    }
    </div>
  )
}

export default Navigation;

// const Navigation = () => {
//   const [showButton,setShowButton]=useState(true);
//   const [showMenu,setShowMenu]=useState(true);

//   const ShowButton=()=>{
//     if(window.innerWidth<=960){
//         setShowButton(false);
//         setShowMenu(false);
//     }else{
//         setShowButton(true);
//     }
// }
// const ShowMenu =()=>{
//   setShowMenu(!showMenu)
// }
// window.addEventListener('resize',ShowButton);
//   return (
//     <div className='navbar'>
//         <div className="logo"><span>Benefit</span><span>Wise</span></div>
//         <img src={menu} onClick={()=>ShowMenu()} alt='navigate' className={showButton?"ham":'ham active'}/>
//         <div className={showMenu?"nav_element active":'nav_element'}>
//         {
//             navdata.map((item,key)=>{
//                 return(
//                 <div className="nav_item" key={key}>
//                     {item.name}
//                 </div>)
//             }
//             )
//     }
//     </div>
//     </div>
//   )
// }

// export default Navigation
