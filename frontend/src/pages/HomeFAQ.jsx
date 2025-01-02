import React, { useState } from 'react';
import { question } from '../data/FAQ';
import S4FAQ from '../assets/homepg/sec4-faqImg.jpg';

const HomeFAQ = () => {
 let [showans, setshowans] = useState(question[0].id);
  return (
    <>
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
    </>
  )
}

export default HomeFAQ
