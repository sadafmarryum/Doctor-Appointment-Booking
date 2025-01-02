import React, { useState } from 'react';
import S2D from '../assets/homepg/sec2-docimg.jpeg';

const Homesec2 = () => {
 let [learnMore, setlearnMore] = useState(false);
  return (
    <>
    <div className="sec2-doctors">
     <div
      className="sec2-img-container">
      <img src={S2D} alt="sec2-img" />
     </div>
     <div
      className="sec2-content">
      <h2>Proud to be one of the nations best</h2>
      <p>We are honored to be recognized among the top healthcare providers in the country. Our commitment to excellence in patient care, innovation, and medical expertise drives us every day.</p>
      <p>{learnMore ? (<p >With a team of dedicated professionals, advanced facilities, and a patient-first approach, we strive to set the standard in quality healthcare.
       Thank you for trusting us with your health.</p>) : ""} </p>
      <button onClick={() => setlearnMore(!learnMore)}>Learn more...</button>
     </div>

    </div>
    </>
  )
}

export default Homesec2
