import React from 'react'
import { BsWalletFill } from 'react-icons/bs';
import './login.css'
import pic from '../../images/lg.jpg'
function Login() {
    // adddata = (e) => {
    //     e.preventDefault();
    //     const data = new FormData(e.currentTarget);
    //     const actualdata = {          
    //       Email: data.get('Email'),          
    //       Password: data.get('Password'),     
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
        <div className='login'>
            <div className="logindata">
                <div className="infologin">
                    <div className="logo">
                        <h2>Account login</h2>
                        <img src={pic} alt='' />                             
                    </div>
                    <div className="information">
                            <form onSubmit={this.adddata}>
                                <h2>member login</h2>                                   
                                <div className="input-icons">
                                    <i className="fa fa-envelope icon">
                                    </i>
                                    <input className="input-field" name='Email' type="text"placeholder="Email"></input>
                                </div>
                                <div className="input-icons">
                                    <i className="fa fa-key icon">
                                    </i>
                                    <input className="input-field" name='password' type="password"placeholder="Password"></input>
                                </div>
                                <div className="input-icons">                    
                                    <input className="btn"type="submit"placeholder="login"></input>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login