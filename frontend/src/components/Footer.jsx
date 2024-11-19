import React from 'react'
import '../css/Footer.css'
import logo from '../assets/footer/footerLogo.png';
import face from '../assets/footer/facebook.png';
import email from '../assets/footer/email.png';
import linkedin from '../assets/footer/linkedin.png';
import twitter from '../assets/footer/twitter.png';

const Footer = () => {
 return (
  <>
   <div className="footer-parent">
    <div className="App-parent-container">
     <div className="content-container">
      <div className='footer-logo'><img src={logo} alt="health-icon" />
       <h2>Health-Hub</h2>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing Nihil  elit.  distinctio harum dolorum vitae beatae
       ut, totam ullam dolorem  architecto veritatis rerum nesciunt?  </p>
      <div className="container-logo">
       <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><img src={face} alt="logo" /></a> 
       <a href="https://www.gmail.com/" target='_blank' rel="noopener noreferrer"> <img src={email} alt="logo" /></a> 
       <a href="https://www.LinkedIn.com/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="logo" /></a> 
      <a href="https://www.twitter.com/" target='_blank' rel="noopener noreferrer"> <img src={twitter} alt="logo" /></a> 
      </div>
     </div>
     <div className="personal-info">
      <div className="company-info">
       <h3>Company</h3>
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
       </ul>
      </div>

      <div className="your-info">
       <h3>Get In Touch</h3>
       <h4>Email Us:</h4>
       <p>Info@healthHub.com</p>
       <h4>Phone:</h4>
       <p>+44 (0)800 511 5586 (UK)</p>
      </div>

     </div>
    </div>
    
    <div className="footer">
     <hr />
     <p>Copyright &copy; 2024 HH Ltd.All right reserved</p>
    </div>

   </div>

  </>
 )
};

export default Footer;
