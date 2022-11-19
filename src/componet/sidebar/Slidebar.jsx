import React from 'react'
import "./sildebar.css"
import { NavLink } from 'react-router-dom'

export default function Slidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrap">
        <div className="side-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <NavLink to='/'style={{color:'white',textDecoration:'none'}}>
            <li className="sidebar-list-item " >
            <i className="fa-solid fa-house-user" style={{color:'white'}}></i>
            <li className='sidebar-icon' style={{padding:'0px 3px'}}>Home</li>
            </li>
            </NavLink>
            <NavLink to='/profile'style={{color:'white',textDecoration:'none'}}>
            <li className="sidebar-list-item ">
            <li className="fa-solid fa-timeline" style={{color:'white'}}>
            </li>
            <li className='sidebar-icon'>Information</li>
            </li>
            </NavLink>
            <NavLink to='/Mybooking' style={{color:'white',textDecoration:'none'}}>
            <li className="sidebar-list-item ">
            <li className="fa-solid fa-arrow-trend-up" style={{color:'white'}}>
            </li>
            <li className='sidebar-icon'>MyBooking</li>
            </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
    // <>
    // <h2>hello</h2>
    // </>
  )
}
