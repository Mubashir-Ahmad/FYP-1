import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../header/Header'
import Slidebar from '../sidebar/Slidebar'
import './profile.css'
function profile() {
  return (
    <>
    <Header/>
    <div className='con'>
        <Slidebar/>
        <div className='profile'>
            <div className="profiledata">
                <div className="infologin">
                    <div className="logo">
                        <h2>profile picture</h2>
                        {/* <img src={pic} alt='' />                              */}
                    </div>
                    <div className="information">
                            <form>
                                <h2>Personal information</h2> 
                                <div className="input-icons">
                                    <i className="fa fa-envelope icon">
                                    </i>
                                    <input className="input-field"  name='name' type="text"placeholder="Name"></input>
                                </div>                                  
                                <div className="input-icons">
                                    <i className="fa fa-envelope icon">
                                    </i>
                                    <input className="input-field" name='email' type="text"placeholder="Email"></input>
                                </div>
                                <div className="input-icons">
                                    <i className="fa fa-envelope icon">
                                    </i>
                                    <input className="input-field" name='number' type="number"placeholder="Number"></input>
                                </div>
                                <div className="input-icons">
                                    <i className="fa fa-key icon">
                                    </i>
                                    <input className="input-field" name='password' type="password"placeholder="Password"></input>
                                </div>
                                <div className="input-icons">                    
                                    <input className="btn" name='' type="submit"placeholder="login"></input>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default profile