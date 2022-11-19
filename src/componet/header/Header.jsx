import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import pic from '../../images/icon.png'
import './header.css'


export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div className='nav-bar'>
            <div className="nav-cont">
                <div className="nav-title">
                    <NavLink to="/">
                        <img className='img' src={pic} alt='' />
                    </NavLink>
                </div>
                <div className="nav-item">
                    <ul className={isMobile ? "nav-link-mobile" : "nav-it"}
                        onClick={() => setIsMobile(true)}>
                        <li className='nav-items'><NavLink to='/profile' style={({ isActive }) => ({ color: 'white', textDecoration: 'none' })}>User</NavLink></li>
                        <li className='nav-items'><NavLink to='/' style={({ isActive }) => ({ color: 'white', textDecoration: 'none' })}>HOME</NavLink></li>
                        <li className='nav-items'><NavLink to='/about' style={({ isActive }) => ({ color: 'white', textDecoration: 'none' })}>ABOUT</NavLink></li>
                        <li className='nav-items dropdown'>
                            <button className="dropbtn">SERVICES
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <NavLink to='/rideshare' className="dropdown-item">Ride Sharing</NavLink>
                                <NavLink to='/cardashbord' className="dropdown-item">Book a Car</NavLink>
                            </div>
                        </li>
                        <li className='nav-items dropdown'>
                            <button className="dropbtn">POST ADDS
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <NavLink to='/rideshareadd' className="dropdown-item">Ride Sharing</NavLink>
                                <NavLink to='/rentcaradd' className="dropdown-item">For Rent Car</NavLink>
                            </div>
                        </li>
                        <li className='nav-items'><NavLink to='/contact' style={({ isActive }) => ({ backgroundColor: isActive ? "rgb(166 161 167)" : '', color: 'white', textDecoration: 'none' })}>CONTACT</NavLink></li>                    
                    </ul>
                    <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ?
                         (
                            < i className='fas fa-times'></i>
                        ) :
                         (
                            <i className='fas fa-bars'></i>
                        )
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
//  <li className='nav-items'><NavLink to='/adminlog' style={({ isActive }) => ({ backgroundColor: isActive ? "rgb(166 161 167)" : '', color: 'white', textDecoration: 'none' })}> */}

//     <div class="dropdown-content">
//         <a href="#">Link 1</a>
//         <a href="#">Link 2</a>
//         <a href="#">Link 3</a>
//     </div>
// </NavLink></li> 