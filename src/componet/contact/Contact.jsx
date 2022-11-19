import React from 'react'
import './contact.css'
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';
import Header from '../header/Header'
import Footer from '../Footer/Footer';
function Contact() {
    // adddata = (e) =>{
    //     console.log('hello')
    //     const data = new FormData(e.currentTarget);
    // }
    return (
      <>
      <Header/>
      <h1>Contact us</h1>
        <div className='main-cont'>            
            <div className="contact-data">
            <div className='address'>
                <h2>Contact Details</h2>
                <h2> <ImLocation /> Address</h2>
                <p>The University of Lahore</p>
                <h2><MdEmail /> Email</h2>
                <p>mubbashirahmad44@gmail.com</p>
                <h2><AiTwotonePhone /> Contact No</h2>
                <p>03351715122 </p>
                <iframe src="https://maps.google.com/maps?width=674&amp;height=383&amp;hl=en&amp;q=The university of lahore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
            <div className="form-data">
            <form>
                <h5>ID</h5>
            <input className='eaa' name='id' type='Number' placeholder='Id'  required ></input>
                <h5>NAME</h5>
              <input className='eaa' name='name' type='text' placeholder='Name' required ></input>
                <h5>EMAIL</h5>
              <input className='eaa' name='email' type='email' placeholder='Email Address' required ></input>
                <h5>PHONE NUMBER</h5>
              <input className='eaa' name='phone' type='number' placeholder='Phone Number' required ></input>
                <h5>VEHICLE NAME</h5>
              <input className='eaa' name='vahiclename' type='text' placeholder='Vehicle Name' required ></input>
                <h5>MESSAGE</h5>
              <textarea className='eaa text' name="form" form="useform">Enter message here...</textarea>
            </form>
            <button className='btnn' type='submit'>Submit </button>
            </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Contact