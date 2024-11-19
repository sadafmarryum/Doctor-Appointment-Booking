import React from 'react';
import '../css/About.css';
import { about } from '../data/aboutus';
import AI from '../assets/about_image.png';

const About = () => {
 return (
  <>
   <div className="AboutUs-container">
    <h3>About Us</h3>
    <div className="about-content-container">
     <div className="about-img-container">
      <img src={AI} alt="about-img" />
     </div>
     <div className="about-content">
      <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records. <br /><br />

       Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>

      <p><b>Our Vision</b></p>
      <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
     </div>
    </div>

    <div className="chooseUs-parent">
     <p id='why-choose'>why <b>choose us</b></p>
     <div className="chooseUs-container">
      {about.map((item, i) => {
       return (
        <>
         <div className="chooseUs-content" key={i} >
          <p><b>{item.title}</b></p>
          <p>{item.discription}</p>
         </div>
        </>
       )
      })}
     </div>
    </div>
   </div>
  
  </>
 )
}

export default About
