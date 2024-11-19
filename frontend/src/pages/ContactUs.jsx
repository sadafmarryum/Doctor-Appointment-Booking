import React from 'react';
import '../css/Contact.css';
import CI from '../assets/contact_image.png';
const ContactUs = () => {
  return (
    <>
      <div className="contactUs-container">
        <h3>Contact Us</h3>
        <div className="contactUs-content-container">
          <div className="contactUs-img-container">
            <img src={CI} alt="contactUs-img" />
          </div>
          <div className="contactUs-content">
            <h4>Our Office</h4>
            <div id='para' >
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
            </div>
            <div id='para'>
              <p>Tel: (415) 555‑0132</p>
              <p>Email: Info@healthHub.com</p>
            </div>
            <h4>Careers at health-Hub</h4>
            <div id='para'>
              <p>Learn more about our teams and job openings.</p>
            </div>
             <p id='Explore'>Explore Jobs</p>
          </div>
        </div>
      </div>
  
    </>
  )
}

export default ContactUs
