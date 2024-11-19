import React, { useState } from 'react';
import '../css/Header.css';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/homepg/headerLogo.png';
import PP from '../assets/homepg/header-profile-pic.jpg';


const Header = () => {
 const location = useLocation();
 const [user, setuser] = useState(location.state ? location.state.user  : null);

 let handleLogout = async  () => {
  // if (user && user.email) {
  //  try {
  //   const res = await fetch(`http://localhost:8009/user/${user.email}`, {
  //    method: 'DELETE',
  //    headers: {
  //     'Content-Type': 'application/json',
  //    },
  //   });
  //   if (res.ok) {
     setuser(null);
  //   } 
  //   else {
  //    alert("Failed to logout. Please try again.");
  //   }
  //  } 
  //  catch (error) {
  //   console.error("Error occurred while logging out:", error);
  //  }
  // }
 }
 return (
  <>
   <div className='header-container'>
    <div className='header-logo'>
     <img src={logo} alt="health-icon" />
     <h2>Health-Hub</h2>
    </div>
    <div className='header-list'>
     <ul>
      <li><Link to="/" className='link'>Home</Link></li>
      <li> <Link to="/doctors" className='link'>All Doctors</Link></li>
      <li><Link to="/about" className='link'>About</Link></li>
      <li><Link to="/contact" className='link'>Contact Us</Link></li>
     </ul>
    </div>

    { user ? (
     <div className="dropdown">
      <div className='profile'>
       <img src={PP} id='profile-pic' alt="User Profile" />
       <h4>{user.name}</h4>
      </div>
      <div className='dropdown-content'>
       <ul >
        <li><Link to="/personalinfo" className='link'>Profile</Link></li>
        <li><Link to="/userappointment" className='link'>My Appointment</Link></li>
        <li onClick={handleLogout}>Logout</li>
       </ul>
      </div>
     </div>
    )
     : (
      <button><Link to="/register" className='link'>Create account</Link></button>
     )}
   </div>
  </>
 )
}

export default Header
