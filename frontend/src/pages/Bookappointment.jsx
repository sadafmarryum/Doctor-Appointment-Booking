import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/Bookappointment.css'
import { useNavigate, useParams } from 'react-router-dom'
import { doctorsCards } from '../data/doctorsCards';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import { UserContext } from "../data/UserProvider";

const Bookappointment = () => {
 const navigate = useNavigate();
 const { user, appointmentDetails, setAppointmentDetails } = useContext(UserContext);
 const { docId } = useParams();
 const data = doctorsCards[docId - 1];

 const [docSlot, setdocSlot] = useState([]);
 const [slotIndex, setslotIndex] = useState(0);
 const [slottime, setslottime] = useState("");

 const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

 useEffect(() => {
  avaiableSlots()
 }, [])


 let avaiableSlots = () => {
  setdocSlot([]);
  ///getting current date
  let today = new Date();
  let allSlots = [];
  //calculate 7 day
  for (let i = 0; i < 7; i++) {
   // getting date with index
   let currentdate = new Date(today);
   currentdate.setDate(today.getDate() + i)
   //getting time of date with index
   let endTime = new Date()
   endTime.setDate(today.getDate() + i)
   endTime.setHours(21, 0, 0, 0)
   /// setting hours
   if (today.getDate() === currentdate.getDate()) {
    currentdate.setHours(currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10)
    currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0)
   }
   else {
    currentdate.setHours(10)
    currentdate.setMinutes(0)
   }

   let timeSlots = []

   while (currentdate < endTime) {
    let formattedtime = currentdate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    //add slot to array
    timeSlots.push({
     datetime: new Date(currentdate),
     time: formattedtime,
    })

    //Increment current time by 30 minutes
    currentdate.setMinutes(currentdate.getMinutes() + 30)
   }
   // Only add days with slots to allSlots array
   if (timeSlots.length > 0) {
    allSlots.push(timeSlots);
   }
  }
  // Save available slots for all days
  setdocSlot(allSlots);

 }

 let bookappointment = async () => {
  if (!user) {
   return toast.error('Please Login for booked an appointment.');
  }

  if (docSlot.length > 0) {
   const selectedDay = docSlot[slotIndex][0].datetime;
   const selectedTime = slottime;

   // Check if the appointment already exists for the same doctor and time
   const isSlotTaken = appointmentDetails.some((item) =>
    item.doctorName === data.name &&
    item.day === daysOfWeek[selectedDay.getDay()] &&
    item.time === selectedTime
   );

   if (isSlotTaken) {
    return toast.error("This slot is already booked. Please choose another one.");
   }

   if (selectedDay && selectedTime) {
    const bookingDetails = {
     doctorName: data.name,
     doctorImage: data.image,
     doctorSpecialist: data.specialist,
     doctorAddress: data.location,
     appointmentFee: data.appointmentFee,
     day: daysOfWeek[selectedDay.getDay()],
     date: selectedDay.getDate(),
     month: selectedDay.toLocaleString('default', { month: 'long' }),
     year: selectedDay.getFullYear(),
     time: selectedTime,
     userEmail: user.email,
    };

    try {
     // Save appointment detail globally
     setAppointmentDetails((prevAppointments) => [...prevAppointments, bookingDetails]);

     // POST to backend using axios
     await axios.post('http://localhost:8009/myappointments', bookingDetails);
     toast(`Appointment booked on ${bookingDetails.day}, ${bookingDetails.date} at ${bookingDetails.time}`);

     setTimeout(() => {
      navigate("/myappointment");
     }, 1000);
    }
    catch (error) {
     toast.error('Failed to book appointment. Please try again.');
     console.error(error);
    }
   }
   else {
    toast("Please select a slot to book an appointment.");
   }
  }
 };

 
 return (
  <>
   <ToastContainer />
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
     <h2>Booking Slots</h2>
     <div className='booking-slot '>
      {docSlot.length > 0 && docSlot
       .filter(daySlots => daySlots.length > 0)
       .map((item, i) => {
        return (
         <div className={`daydate ${slotIndex === i ? "active-day" : ""}`} key={i} onClick={() => setslotIndex(i)}>
          <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
          <p>{item[0] && item[0].datetime.getDate()}</p>
         </div>
        );
       })}
     </div>

     <div className='time-slot'>
      {docSlot.length > 0 && docSlot[slotIndex]
       .filter(slot => slot.time)
       .map((item, i) => {
        return (
         <p className={`time ${slottime === item.time ? "active-time" : ""}`} key={i} onClick={() => setslottime(item.time)}>{item.time.toLowerCase()}</p>
        );
       })}
     </div>
     <button onClick={bookappointment}>Book an appointment</button>
    </div>
   </div>
  </>
 )
}

export default Bookappointment



