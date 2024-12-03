import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo_icon from '../../assets/logo.png'
import Search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import jack_icon from '../../assets/jack.png'
const Navbar = () => {
    return (
        <nav className='flex-div '>
            <div className='nav-left flex-div'>
                <img src={menu_icon} alt="" className='menu-icon' />
                <img src={logo_icon} alt="" className='logo' />
            </div>
            <div className='nav-middle flex-div'>
                <div className='search-box flex-div '>
                <input type='text' placeholder='Search'></input>
                <img src={Search_icon} alt="" />

                </div>
            </div>
            <div className='nav-right flex-div'>
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" /> 
                <img src={jack_icon} alt="" className='user-icon' />
            </div>
        </nav>
    )
}

export default Navbar