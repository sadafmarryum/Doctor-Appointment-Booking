import React from 'react';
import S5PS from '../assets/homepg/sec5-docImg.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";

const Homeslider = () => {
 // React slider
 let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplayspeed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
   {
    breakpoint: 570,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
    },
   }
  ]
 };
  return (
    <>
    <div className="sec5-patient-say">
     <div className="sec5-content">
      <h2>What our patient say</h2>
      <p>Our patients appreciate the compassionate care and personalized treatment they receive at our facility.We are proud to be a trusted partner in their health and well-being.
      </p>
     </div>
     <div className="sec5-cards">
      <Slider className="sliderss" {...settings}>
       <div className="sec5-card1">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4>Muhmmad Sarfraz</h4>
          <div className='starColor' >
           <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
          </div>
         </div>
        </div>
        <p>The doctor was incredibly attentive and took the time to listen to all my concerns, making me feel truly cared for.</p>
       </div>
       <div className="sec5-card2">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4>Muhmmad tayyab</h4>
          <div className='starColor' >
           <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
          </div>
         </div>
        </div>
        <p>I had a wonderful experience. The treatment was effective, and the staff was friendly and professional.</p>
       </div>
       <div className="sec5-card3">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4>Muhmmad Younas</h4>
          <div className='starColor' >
           <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
          </div>
         </div>
        </div>
        <p>I’m so grateful for the doctor’s expertise. My recovery was quicker than I expected, thanks to their personalized care</p>
       </div>
       <div className="sec5-card4">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4> Waqas Ali</h4>
          <div className='starColor' >
           <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
          </div>
         </div>
        </div>
        <p>The doctor provided clear explanations and made sure I was comfortable with my treatment plan every step of the way.</p>
       </div>
       <div className="sec5-card5">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4> Safdar Hussan</h4>
          <div className='starColor' >
           <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
          </div>
         </div>
        </div>
        <p>I feel like I’m in great hands with this team. They gave me the best treatment and ongoing support, and I’m feeling healthier than ever.</p>
       </div>
       <div className="sec5-card6">
        <div className='sec5-img-container'>
         <img src={S5PS} alt="sec5-img" />
         <div>
          <h4>Hanzala Javed</h4>
          <div className='starColor' >
           <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
          </div>
         </div>
        </div>
        <p>The doctor’s care was exceptional. I understood my options and felt supported throughout my treatment.</p>
       </div>
      </Slider>
     </div>
    </div>
    </>
  )
}

export default Homeslider
