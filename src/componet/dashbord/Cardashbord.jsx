import './cardashbord.css'
import React, { useState } from 'react'
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';

function Cardashbord() {
  const [date, setDate] = useState();
   // adddata = (e) => {
        //     e.preventDefault();
        //     const data = new FormData(e.currentTarget);
        //     const actualdata = {                    
        //  date:data.get('date'),
        //  location:data.get('location'),
        //  time:data.get('time'),
        //  number:data.get('number'),
        //  color:data.get('color'),
        //  description:data.get('description')
        //     }  
        //     axios.post('http://127.0.0.1:8000/add', actualdata)
        //       .then(res => {
        //         console.log(res.data)
        //       })
        //       .catch(error => {
        //         console.log(error)
        //       })
        //   }
  return (
    <div>
      <Header />
      <form>
      <h2>Booking Detail</h2>
        <div className="input-iconss">
          <i className="fa fa-envelope icon">
          </i>
          <input  className="input-field" name='date' type='date' onChange={e => setDate(e.target.value)} />
        </div>
        <div className="input-iconss">
          <i className="fa fa-key icon">
          </i>
          <input className="input-field" name='location' type="text" placeholder="Pickup location"></input>
        </div>
        <div className="input-iconss">
          <i className="fa fa-key icon">
          </i>
          <input className="input-field" name='number' type="Number" placeholder="Mobile number"></input>
        </div>
        <div className="input-iconss">
        <i className="fa fa-timer icon"></i>
          <input className="input-field"name='time' type="time"></input>
        </div>
        <NavLink to='/carlist'>
        <div className="input-iconss">
          <input className="bt" type="submit"  placeholder="login"></input>
        </div>
        </NavLink>
      </form>
      <Footer />
    </div>
  )
}

export default Cardashbord