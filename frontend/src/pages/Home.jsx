import React, { useState } from 'react';
// React slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../css/Home.css';
import { question } from '../data/FAQ';
import BL from '../assets/homepg/banner-l-img.jpg'
import BR1 from '../assets/homepg/banner-r-img1.jpeg';
import BR2 from '../assets/homepg/banner-r-img2.jpeg';
import S1D from '../assets/homepg/sec1-findDoctor.jpeg';
import S1L from '../assets/homepg/sec1-findLocation.jpg';
import S1BA from '../assets/homepg/sec1-bookAppointment.jpg';
import S2D from '../assets/homepg/sec2-docimg.jpeg';
import S4FAQ from '../assets/homepg/sec4-faqImg.jpg';
import S5PS from '../assets/homepg/sec5-docImg.jpg';
import S5St from '../assets/homepg/sec5-stars.webp';


const Home = () => {
 let [showans, setshowans] = useState(question[0].id);
 let [learnMore, setlearnMore] = useState(false);
 // React slider
 let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
 };

 return (
  <>
   <div className='home-parent'>
    
    <div className='banner-container'>
     <div className='banner-content-container'>
      <div className='banner-content'>
       <h1>We help patients live a healthy,<br />longer life</h1>
       <p>We empower patients to live longer, healthier lives through comprehensive care, preventative solutions, and personalized support, focusing on wellness and lifestyle optimization for thriving health at every stage</p>
       <button><Link to="/doctors" className='link'>Request an Appointment</Link></button>
      </div>
      <div className='banner-ratio'>
       <div id='ratio-1'>
        <h2>30 +</h2>
        <p>Year of Experience</p>
       </div>
       <div id='ratio-2'>
        <h2>15 +</h2>
        <p>Clinic Location</p>
       </div>
       <div id='ratio-3'>
        <h2>100 %</h2>
        <p>Patient Satisfication</p>
       </div>
      </div>
     </div>
     <div className='banner-img-container'>
      <div className="img-container">
       <div className="left-img">
        <img src={BR1} alt="img-left" />
       </div>
       <div className="right-img">
        <div id="r-img-1">
         <img src={BL} alt="img-right" />
        </div>
        <div id="r-img-2">
         <img src={BR2} alt="img-right" />
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="sec1-services-parent">
     <div className="sec1-content">
      <h2>Providing the best medical services</h2>
      <p>We deliver top-quality medical services focused on excellence, compassion, and patient-centered care to enhance health outcomes and ensure a positive healthcare experience </p>
     </div>
     <div className="sec1-cards">
      <div className="sec1-card1">
       <img src={S1D} alt="img-card" />
       <h3>Find a Doctor</h3>
       <p>Easily connect with trusted, experienced doctors across a range of specialties. Our directory makes it simple to find the right physician for your needs.</p>
      </div>
      <div className="sec1-card2">
       <img src={S1L} alt="img-card" />
       <h3>Find a Location</h3>
       <p>Locate convenient healthcare facilities near you. Access quality care at any of our state-of-the-art locations. </p>
      </div>
      <div className="sec1-card3">
       <img src={S1BA} alt="img-card" />
       <h3>Book Appointment</h3>
       <p>Schedule your appointment effortlessly, with options to suit your timing and preferences. Quality care is just a few clicks away.</p>
      </div>
     </div>
    </div>
    <div className="sec2-doctors">
     <div className="sec2-img-container">
      <img src={S2D} alt="sec2-img" />
     </div>
     <div className="sec2-content">
      <h2>Proud to be one of the nations best</h2>
      <p>We are honored to be recognized among the top healthcare providers in the country. Our commitment to excellence in patient care, innovation, and medical expertise drives us every day.</p>
      <p>{learnMore ? (<p >With a team of dedicated professionals, advanced facilities, and a patient-first approach, we strive to set the standard in quality healthcare.
       Thank you for trusting us with your health.</p>) : ""} </p>
      <button onClick={() => setlearnMore(!learnMore)}>Learn more...</button> 
      
      
     </div>
    </div>
    <div className="sec3-medical-services">
     <div className="sec3-content">
      <h2>Our medical services</h2>
      <p>Providing essential healthcare services with a focus on prevention, treatment, and management of health conditions. Empowering individuals through accessible, informative resources to improve overall well-being
      </p>
     </div>
     <div className="sec3-cards">
      <div className="sec3-card1">
       <h3>Cancer Care</h3>
       <p>Comprehensive cancer care services, from early detection to advanced treatment options. Dedicated to improving quality of life through personalized care and support for patients and their families</p>
      </div>
      <div className="sec3-card2">
       <h3>Labor & Delivery</h3>
       <p>Expert care during labor and delivery, ensuring a safe and supportive environment for both mother and baby. Our team provides personalized attention, from prenatal to postnatal care, for a positive birth experience.</p>
      </div>
      <div className="sec3-card3">
       <h3>Heart & Vascular</h3>
       <p>Comprehensive heart and vascular care, offering advanced diagnostics and treatment for cardiovascular conditions. Dedicated to promoting heart health through personalized care and cutting-edge medical solutions.</p>
      </div>
      <div className="sec3-card4">
       <h3>Mental Health</h3>
       <p>Compassionate mental health care focused on providing support for emotional well-being and mental stability. Offering personalized therapy and treatment options to help individuals manage stress, anxiety, depression, and more.</p>
      </div>
      <div className="sec3-card5">
       <h3>Neurology</h3>
       <p>Expert neurological care for the diagnosis and treatment of brain, spinal cord, and nerve disorders. Providing personalized treatment plans to improve quality of life for patients with neurological conditions.</p>
      </div>
      <div className="sec3-card6">
       <h3>Burn Treatment</h3>
       <p>Specialized care for burn injuries, offering advanced treatments to promote healing and reduce scarring. Our team provides comprehensive support for recovery, from initial treatment to long-term rehabilitation.</p>
      </div>
     </div>
    </div>
    <div className="sec4-FAQ">
     <div className="sec4-img-container">
      <img src={S4FAQ} alt="sec4-img" />
     </div>
     <div className="sec4-content">
      <h2>Most questions by our beloved patients</h2>
      <div className="sec4-faq-content">
       {question.map((faqItems, i) => {
        return (
         <div className="sec4-faqItems" key={i}>
          <h3 onClick={() => setshowans(faqItems.id)}>{faqItems.ques}</h3>
          <p className={showans === faqItems.id ? "activeAns" : ""}>{faqItems.anws}</p>
         </div>
        )
       })}
      </div>
     </div>
    </div>
    <div className="sec5-patient-say">
     <div className="sec5-content">
      <h2>What our patient say</h2>
      <p>Our patients appreciate the compassionate care and personalized treatment they receive at our facility.We are proud to be a trusted partner in their health and well-being.
      </p>
     </div>
     <div className="sec5-cards">
      <Slider {...settings}>
       <div className="sec5-card1">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4>Muhmmad Sarfraz</h4>
          <img src={S5St} alt="stars" id="sec5-stars" />
         </div>
        </div>
        <p>The doctor was incredibly attentive and took the time to listen to all my concerns, making me feel truly cared for.</p>
       </div>
       <div className="sec5-card2">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4>Muhmmad tayyab</h4>
          <img src={S5St} alt="stars" id="sec5-stars" />
         </div>
        </div>
        <p>I had a wonderful experience. The treatment was effective, and the staff was friendly and professional.</p>
       </div>
       <div className="sec5-card3">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4>Muhmmad Younas</h4>
          <img src={S5St} alt="stars" id="sec5-stars" />
         </div>
        </div>
        <p>I’m so grateful for the doctor’s expertise. My recovery was quicker than I expected, thanks to their personalized care</p>
       </div>
       <div className="sec5-card4">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4> Waqas Ali</h4>
          <img src={S5St} alt="stars" id="sec5-stars" />
         </div>
        </div>
        <p>The doctor provided clear explanations and made sure I was comfortable with my treatment plan every step of the way.</p>
       </div>
       <div className="sec5-card5">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4> Safdar Hussan</h4>
          <img src={S5St} alt="stars" id="sec5-stars" />
         </div>
        </div>
        <p>I feel like I’m in great hands with this team. They gave me the best treatment and ongoing support, and I’m feeling healthier than ever.</p>
       </div>
       <div className="sec5-card6">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4>Hanzala Javed</h4>
          <img src={S5St} alt="stars" id="sec5-stars" />
         </div>
        </div>
        <p>The doctor’s care was exceptional. I understood my options and felt supported throughout my treatment.</p>
       </div>

      </Slider>
     </div>
    </div>

   </div>
  
  </>
 )
}

export default Home
