import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Homesec3 = () => {
 const [startCardAnimation, setStartCardAnimation] = useState(false);

 // Trigger animation after 6 seconds
 useEffect(() => {
  const interval = setInterval(() => {
   setStartCardAnimation((prev) => !prev);
  }, 6000);
  return () => clearInterval(interval);
 }, []);

 const card6ContainerVariants = {
  visible: {
   opacity: 1,
   transition: {
    staggerChildren: 0.8, // Time interval between animations
   },
  },
 };

 const card6Variants = {
  hidden: { opacity: 1, scaleY: 0.9 },
  visible: {
   opacity: 1,
   scaleY: 1,
   rotate: 0
  }
 };
  return (
    <>
    <div className="sec3-medical-services">
     <div className="sec3-content">
      <h2>Our medical services</h2>
      <p>Providing essential healthcare services with a focus on prevention, treatment, and management of health conditions. Empowering individuals through accessible, informative resources to improve overall well-being
      </p>
     </div>
     <motion.div variants={card6ContainerVariants}
      initial="hidden"
      animate={startCardAnimation ? "visible" : "hidden"}
      className="sec3-cards">

      <motion.div variants={card6Variants} className="sec3-card1">
       <h3>Cancer Care</h3>
       <p>Comprehensive cancer care services, from early detection to advanced treatment options. Dedicated to improving quality of life through personalized care and support for patients and their families</p>
      </motion.div>
      <motion.div variants={card6Variants} className="sec3-card2">
       <h3>Labor & Delivery</h3>
       <p>Expert care during labor and delivery, ensuring a safe and supportive environment for both mother and baby. Our team provides personalized attention, from prenatal to postnatal care, for a positive birth experience.</p>
      </motion.div>
      <motion.div variants={card6Variants} className="sec3-card3">
       <h3>Heart & Vascular</h3>
       <p>Comprehensive heart and vascular care, offering advanced diagnostics and treatment for cardiovascular conditions. Dedicated to promoting heart health through personalized care and cutting-edge medical solutions.</p>
      </motion.div>
      <motion.div variants={card6Variants} className="sec3-card4">
       <h3>Mental Health</h3>
       <p>Compassionate mental health care focused on providing support for emotional well-being and mental stability. Offering personalized therapy and treatment options to help individuals manage stress, anxiety, depression, and more.</p>
      </motion.div>
      <motion.div variants={card6Variants} className="sec3-card5">
       <h3>Neurology</h3>
       <p>Expert neurological care for the diagnosis and treatment of brain, spinal cord, and nerve disorders. Providing personalized treatment plans to improve quality of life for patients with neurological conditions.</p>
      </motion.div>
      <motion.div variants={card6Variants} className="sec3-card6">
       <h3>Burn Treatment</h3>
       <p>Specialized care for burn injuries, offering advanced treatments to promote healing and reduce scarring. Our team provides comprehensive support for recovery, from initial treatment to long-term rehabilitation.</p>
      </motion.div>
     </motion.div>
    </div>
    </>
  )
}

export default Homesec3
