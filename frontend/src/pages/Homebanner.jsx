import React, { useState, useEffect } from 'react';
import BL from '../assets/homepg/banner-l-img.jpg'
import BR1 from '../assets/homepg/banner-r-img1.jpeg';
import BR2 from '../assets/homepg/banner-r-img2.jpeg';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Homebanner = () => {

  const [startAnimation, setStartAnimation] = useState(false);
  
  // Trigger animation after 2 seconds
  useEffect(() => {
   const interval = setInterval(() => {
    setStartAnimation((prev) => !prev);
   }, 2000); 
   return () => clearInterval(interval);
  }, []);

 ////banner animation 
 const headingVariants = {
  hidden: {
   opacity: 1,
  },
  visible: {
   opacity: 1,
   transition: {
    staggerChildren: 0.3,
   },
  },
 };
 const wordVariants = {
  hidden: { opacity: 0.1, y: 20 },
  visible: { opacity: 1, y: 0 },
 };

 return (
  <>
   <div className='banner-container'>
    <div className='banner-content-container'>
     <div className='banner-content'>
      <motion.h1 variants={headingVariants}
       initial="hidden"
       animate={startAnimation ? "visible" : "hidden"}
      >
       <motion.span style={{ color: "black", margin: "0 5px" }} variants={wordVariants}>
        We
       </motion.span>{" "}
       <motion.span style={{ color: "black", margin: "0 5px" }} variants={wordVariants}>
        help
       </motion.span>{" "}
       <motion.span style={{ color: "black", margin: "0 5px" }} variants={wordVariants}>
        patients
       </motion.span>{" "}
       <motion.span style={{ color: "black", margin: "0 5px" }} variants={wordVariants}>
        live
       </motion.span>{" "}
       <motion.span style={{ color: "black", margin: "0 5px" }} variants={wordVariants}>
        a healthy
       </motion.span>{" "}
       <motion.span style={{ color: "black", margin: "0 5px" }} variants={wordVariants}>
        longer
       </motion.span>
       <motion.span style={{ color: "black", margin: "0 5px" }} variants={wordVariants}>
        life
       </motion.span>
      </motion.h1>
      <p>We empower patients to live longer, healthier lives through comprehensive care, preventative solutions, and personalized support, focusing on wellness and lifestyle optimization for thriving health at every stage</p>
      <button><Link to="/docAppointment" className='link'>Request an Appointment</Link></button>
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
  </>
 )
}

export default Homebanner
