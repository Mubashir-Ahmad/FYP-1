import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../header/Header'
import './adds.css'
function Caradd() {
    // adddata = (e) => {
        //     e.preventDefault();
        //     const data = new FormData(e.currentTarget);
        //     const actualdata = {                    
        //  name:data.get('email'),
        //  model:data.get('model'),
        //  varient:data.get('varient'),
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
            <>
                <Header />
                <h1>Post Rent Car Add</h1>
                <div className='adds'>
                    <div className="logindata">
                        <div className="infologin">
                            <div className="logo">
                                <h2>Vahicle Picture</h2>
                                {/* <img src={pic} alt='' />                              */}
                            </div>
                            <div className="information">
                                <form>
                                    <h2>Vahicle information</h2>
                                    <input className="input-field" name='name' type="text" placeholder="Name"></input>
                                    <input className="input-field" name='model' type="text" placeholder="Make Model"></input>
                                    <input className="input-field" name='varient' type="text" placeholder="Make Varient"></input>
                                    <input className="input-field" name='number' type="number" placeholder="Number"></input>
                                    <input className="input-field" name='color' type="text" placeholder="Color"></input>
                                    <textarea className="input-field" name='description' form="useform" placeholder="About Car"></textarea>
                                    <div className="input-icons">
                                        <input className="btn" name='' type="submit" placeholder="login"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    export default Caradd