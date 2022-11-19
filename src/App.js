import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./componet/home/Home";
import Header from "./componet/header/Header";
import Carlist from "./componet/products/Carlist";
import Ridesharing from "./componet/products/Ridesharing";
import Contact from "./componet/contact/Contact";
import About from "./componet/about/About";
import Error from "./componet/error/Error";
import Profile from "./componet/profile/Profile";
import Cardashbord from "./componet/dashbord/Cardashbord";
import Login from "./componet/login/Login";
import ADDS from "./componet/adds/ADDS";
import Caradd from "./componet/adds/Caradd";
import Mybooking from "./componet/booking/Mybooking";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cardashbord" element={<Cardashbord />} />
          <Route path="/carlist" element={<Carlist />} />          
          <Route path="/rideshare" element={<Ridesharing />} />          
          <Route path="/profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/rideshareadd" element={<ADDS />} />
          <Route path="/rentcaradd" element={<Caradd />} />
          <Route path="/Mybooking" element={<Mybooking />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
