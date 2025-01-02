import React from 'react';
import '../css/Header.css';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/homepg/headerLogo.png';
import PP from '../assets/homepg/header-profile-pic.jpg';
import { TiThMenu } from "react-icons/ti";
import { useContext } from "react";
import { UserContext } from "../data/UserProvider";
import Cookies from 'js-cookie';

const Header = () => {

 const { user, setUser } = useContext(UserContext);
 const navigate = useNavigate();

 let handleLogout = () => {
  setUser(null);
  Cookies.remove('user');
  navigate("/");
 }

 let ViewProfile = () => {
  navigate("/myProfile");
 }

 return (
  <>
   <div className='header-container'>
    <input type="checkbox"  id="check" />
    <label htmlFor="check" id="checkbtn"><TiThMenu id="menuicon" /></label>
    <div className='header-logo'>
     <img src={logo} alt="health-icon" />
     <h2>Health-Hub</h2>
    </div>
    <div className='header-list'>
     <ul>
      <li><Link to="/" className='link'>Home</Link></li>
      <li> <Link to="/docAppointment" className='link'>All Doctors</Link></li>
      <li><Link to="/about" className='link'>About</Link></li>
      <li><Link to="/contact" className='link'>Contact Us</Link></li>
     </ul>
    </div>

    {user ? (
     <div className="dropdown">
      <div className='profile'>
       <img src={PP} id='profile-pic' alt="User Profile" />
       <h4>{user.name}</h4>
      </div>
      <div className='dropdown-content'>
       <ul >
        <li onClick={ViewProfile}>Profile</li>
        <li><Link to="/myappointment" className='link'>My Appointment</Link></li>
        <li onClick={handleLogout}>Logout</li>
       </ul>
      </div>
     </div>
    )
     : (
      <button><Link to="/login" className='link'>Login</Link></button>
     )}
   </div>
  </>
 )
}

export default Header
