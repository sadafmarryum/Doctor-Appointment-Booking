import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import S1D from '../assets/homepg/sec1-findDoctor.jpeg';
import S1L from '../assets/homepg/sec1-findLocation.jpg';
import S1BA from '../assets/homepg/sec1-bookAppointment.jpg';

const Homesec1 = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  
  // Trigger animation after 2 seconds
  useEffect(() => {
   const interval = setInterval(() => {
    setStartAnimation((prev) => !prev);
   }, 2000); 
   return () => clearInterval(interval);
  }, []);
 ////animation for cards
 const containerVariants = {
  visible: {
   opacity: 1,
   transition: {
    staggerChildren: 0.4,
   },
  },
 };
 const cardVariants = {
  hidden: { opacity: 0.4, y: 50 },
  visible: { opacity: 1, y: 0 },
 };

  return (
    <>
    <div className="sec1-services-parent">
     <div className="sec1-content">
      <h2>Providing the best medical services</h2>
      <p>We deliver top-quality medical services focused on excellence, compassion, and patient-centered care to enhance health outcomes and ensure a positive healthcare experience </p>
     </div>
     <motion.div variants={containerVariants}
      initial="hidden"
      animate={startAnimation ? "visible" : "hidden"}
      className="sec1-cards">

      <motion.div variants={cardVariants} className="sec1-card1">
       <img src={S1D} alt="img-card" />
       <h3>Find a Doctor</h3>
       <p>Easily connect with trusted, experienced doctors across a range of specialties. Our directory makes it simple to find the right physician for your needs.</p>
      </motion.div>
      <motion.div variants={cardVariants} className="sec1-card2">
       <img src={S1L} alt="img-card" />
       <h3>Find a Location</h3>
       <p>Locate convenient healthcare facilities near you. Access quality care at any of our state-of-the-art locations. </p>
      </motion.div>
      <motion.div variants={cardVariants} className="sec1-card3">
       <img src={S1BA} alt="img-card" />
       <h3>Book Appointment</h3>
       <p>Schedule your appointment effortlessly, with options to suit your timing and preferences. Quality care is just a few clicks away.</p>
      </motion.div>
     </motion.div>
    </div>
    </>
  )
}

export default Homesec1
