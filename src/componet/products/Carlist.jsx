import React, {useEffect} from 'react'
import './product.css'
import pic from '../../images/icon.png'
import { GiCarDoor } from 'react-icons/gi';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { SiAirplayaudio } from 'react-icons/si';
import Footer from '../Footer/Footer';
import Header from '../header/Header';
function Products() {
    // state={
    //     items:[]
    // }
    // viewdata =  async() => {
    //     await axios.get('http://127.0.0.1:8000/aview')
    //           .then((res)=>{
    //               this.setState({items:res.data})
    //           })
    //      }
    // useEffect(() => {
    //     viewdata()
    //       });
  return (
    <div>
        <Header/>
        <h1>Car Detail</h1>
        <div className="data">
            <div className="carpic">
                <img className='carimg' src={pic} alt='' />
            </div>
            <div className="carinfo">
                <h2>Car name</h2>
                <p>Car varient</p>
                <GiCarDoor/> 4 <MdAirlineSeatReclineNormal /> 4 <SiAirplayaudio/>Ac 
                <p className=''>
                    <span>Theft Protection</span>
                    |
                    <span>Theft Protection</span>
                    |
                    <span>Theft Protection</span>
                    |
                    <span>Theft Protection</span>
                    |
                    <span>Theft Protection</span>
                </p>            
            </div>
            <div className="carprice">
                <h2>Car price</h2><br/><br/>
                <button className='btn' type='submit'>Bookme </button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Products