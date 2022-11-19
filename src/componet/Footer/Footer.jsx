import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import pic from '../../images/icon.png'
import './footer.css'
function Footer() {
  return (
    <>
    <div className="setion">
        <div className="our-services">
      <div className="sevice-content ">
          <h4 className='section-tittle'>Services</h4>
          <ul>
            <li>Book Rental car</li>
            <li>Book a Driver</li>
            <li>Book a Mechanic</li>
          </ul>
        </div>
        <div className="sevice-content">
          <h4 className='section-tittle'>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="sevice-content">
          <h4 className='section-tittle'>Contact Info</h4>
          <p className='section-paragarph'>Build By Mohsin Ali Yousuf Arshad Mubbashir Ahmad</p>
          <p className='section-paragarph'>Address University of lahore</p>
        </div>
        <div className="sevice-content">
          <h4>Follow us</h4>
          <BsFacebook/> <FaInstagramSquare/> <AiFillTwitterCircle/>
        </div>
      </div>
      </div>
      <div className='footer'>
      <img className='img1' src={pic} alt="" /><p className='paragraph'> Auto Line Service &copy; All Rights Reserved </p>
      </div>
      
      </>
  )
}

export default Footer