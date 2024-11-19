import React from 'react'
import '../css/Myappointment.css'
import { useParams } from 'react-router-dom'
import { doctorsCards } from '../data/doctorsCards';

const Myappointment = () => {
 const { docId } = useParams();
 let data = doctorsCards[docId - 1];

 return (
  <>
   <div className='appointment-parent-container'>
    <div className='Myappointment'>
     <div className='Myappointment-img'>
      <img src={data.image} alt="img" />
      </div>
     <div className='Myappointment-content'>
      <h2>{data.name} </h2>
      <p>{data.degree}{" - "}{data.specialist}  <h id='experience'>{data.experience}</h></p>
      <h4>About  </h4>
      <p>{data.about}</p>
      <h2>Appointment fee:{data.appointmentFee}</h2>
     </div>
    </div>
    <div className='booking'>
     <h4>Booking Slots</h4>
     <button>Book an appointment</button>
    </div>
   </div>
  </>
 )
}

export default Myappointment
