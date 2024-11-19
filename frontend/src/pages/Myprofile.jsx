import React from 'react'
import '../css/Myprofile.css'
import PP from '../assets/homepg/header-profile-pic.png';

const Myprofile = () => {
 return (
  <div className='Profile-parent-container'>
   <div className="myprofile">
    <div className='myprofile-pic'>
     <img src={PP} id='myprofile-pic' alt="User Profile" />
     <h3>kdkdf</h3>
    </div>
    <div className="myprofile-content">
     <p>contact information</p>
     <h5>Name:</h5>
     <h5>Email:</h5>
     <h5>Phone:</h5>
     <h5>Address:</h5>
     <p>basic information</p>
     <h5>Gender:</h5>
     <h5>Birthday:</h5>
    </div>
    <div className="myprofile-btn">
     <button>Edit</button>
     <button>Save information</button>
    </div>
   </div>
  </div>
 )
}

export default Myprofile
