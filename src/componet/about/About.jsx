import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import './about.css'
function About() {
  return (
    <>
    <Header/>
    <h1>About us</h1>
    <div className='about-con'>
      
      <div className='about-data'>
        <h3>Who we are</h3>
        <p>Auto Line Service is a Lahore Car Hire company that specializes in providing services for all types of travel. In addition to providing rent with a car service, we also provide several other services such as.<br />
             Ride sharing <br/>
             Car Rental Daily, Weekly, Monthly <br/>
          </p>
          <h3>OurVision</h3> 
          <p>To ensure that Providing our services to move in city and out city with verified driver which enhance the change of affordable, sociable and convenient commuting. Our environmental and human-friendly mobility system saves our planet from global warming and helps to keep our atmosphere clean.</p>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default About