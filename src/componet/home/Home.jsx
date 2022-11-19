import React from 'react'
import './home.css'

// import '../header/header.css'
import car from '../../images/car.png'
import rideshare from '../../images/Rideshare.jpg'
import Fade from 'react-reveal/Fade'
import { AiOutlineCar } from 'react-icons/ai';
import { GrBusinessService } from 'react-icons/gr';
import { GiMechanicGarage } from 'react-icons/gi';
import { GiPublicSpeaker } from 'react-icons/gi';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import pic from '../../images/icon.png'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../header/Header'
function Home() {
  return (
    <>
    <Header/>
    <div className='main-cont'>
      <Fade left >
        <img src={car} alt='' className="fade1" />
      </Fade>
      <Fade right >
        <img src={rideshare} alt='' className="fade1" />
      </Fade>
      <h2><GrBusinessService /> Our services</h2>
      <div className='our-services'>
        <div className="sevice-content box-1">
          <AiOutlineCar size={30} />
          <h3> Rent A  Car</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, incidunt ut deserunt corporis, deleniti magni blanditiis qui ipsa excepturi, dolore laudantium fuga officia!</p>
          <div className="text-cont">
            <h3>Get Best Experience</h3>
            <NavLink to='/home' className='btn'>Book a Car</NavLink> 
          </div>
        </div>
        <div className="sevice-content box-3">
        <GiMechanicGarage size={30} />
          <h4>Ride Share</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, incidunt ut deserunt corporis, deleniti magni blanditiis qui ipsa excepturi, dolore laudantium fuga officia!</p>
          <div className="text3-cont">
            <h3>Get Best Experience</h3>
            <NavLink to='/home' className='btn'>Book a Car</NavLink> 
          </div>
        </div>
      </div>
      <h2><GrBusinessService /> Why Choose Us</h2>
      <div className='our-services'>
        <div className="sevice-content ">
        <AiOutlineCar size={30}/>
          <h4>  Rent A Private Car</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, incidunt ut deserunt corporis, deleniti magni blanditiis qui ipsa excepturi, dolore laudantium fuga officia!</p>
        </div>
        <div className="sevice-content">
        <AiOutlineCar size={30} />
          <h4> Rent A Public Car</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, incidunt ut deserunt corporis, deleniti magni blanditiis qui ipsa excepturi, dolore laudantium fuga officia!</p>
        </div>
        <div className="sevice-content">
        <GiPublicSpeaker size={30} />
          <h4>Book A Driver</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, incidunt ut deserunt corporis, deleniti magni blanditiis qui ipsa excepturi, dolore laudantium fuga officia!</p>
        </div>
        <div className="sevice-content">
        <GiMechanicGarage size={30} />
          <h4> Book A Mechanic</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, incidunt ut deserunt corporis, deleniti magni blanditiis qui ipsa excepturi, dolore laudantium fuga officia!</p>
        </div>
      </div>
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
     <Footer/>
    </div>
    </>
  )
}

export default Home 