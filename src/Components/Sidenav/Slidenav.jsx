import React from 'react'
import '../Sidenav/Slidenav.css'
import dashboard from '../Assets/dashboard.png'
import help from '../Assets/help.png'
import livechat from '../Assets/live-chat.png'
import plant from '../Assets/plant.png'
import puzzle from '../Assets/puzzle.png'
import off from '../Assets/off.png'

const Slidenav = () => {
  return (
    <div className="sidenav">
    <div className="profile">
       <div className="profileco">
       <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
       <h5>Ram Mohan</h5>
       <span>demo23@gmail.co</span>
       </div>
    </div>
    <div className="sidenav-cont">
       <div className="nav-items">
            <img src={dashboard} alt="" srcset="" />
            <span>Dashboard</span>
       </div>
       <div className="nav-items">
       <img src={plant} alt="" srcset="" />
            <span>Perks</span>
       </div>
       <div className="nav-items">
       <img src={puzzle} alt="" srcset="" />
            <span>Addons</span>
       </div>
       <div className="nav-items">
       <img src={livechat} alt="" srcset="" />
            <span>FAQ</span>
       </div>
       <div className="nav-items">
       <img src={help} alt="" srcset="" />
            <span>Support</span>
       </div>
    </div>


    <div className="logout">
    <span>Logout</span>
       <img src={off} alt="" srcset="" />
            
       </div>
</div>
  )
}

export default Slidenav