import React, { useContext, useEffect } from 'react';
import '../css/Myappointment.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { UserContext } from "../data/UserProvider";

const Myappointment = () => {
 const { user, appointmentDetails, setAppointmentDetails } = useContext(UserContext);
  

 useEffect(() => {
  if (user) {
   fetchAppointments(user.email);
  }
  // eslint-disable-next-line 
 }, [user]);

 const fetchAppointments = async (email) => {
  try {
   const response = await fetch(`http://localhost:8009/myappointments?userEmail=${email}`);
   const data = await response.json();

   if (response.ok) {
    setAppointmentDetails(data)
   }
   else {
    toast.error(data.error || 'Failed to fetch appointments.');
   }
  }
  catch (error) {
   toast.error('An error occurred while fetching appointments.');
   console.error(error);
  }
 };

  let handlecancelAppointment = async (appointmentId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to cancel this appointment?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });

      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:8009/myappointments/${appointmentId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          let cancelAppointment = appointmentDetails.filter((appointment) => appointment._id !== appointmentId);
          setAppointmentDetails(cancelAppointment);
          Swal.fire("Appointment has been cancelled.");
        } 
        else {
          toast.error("Failed to cancel appointment.");
        }
      } 
      else {
        Swal.fire("Appointment has not cancelled.");
      }
    } 
    catch (error) {
      toast.error("An error occurred while canceling the appointment.");
      console.error(error);
    }
  };


 return (
  <>
   <ToastContainer />
   <div className="myappointment-parent">
    <h2>My Appointment</h2>
    {appointmentDetails.length > 0 ? (
     appointmentDetails.map((item) => (
      <div className='myappointment' key={item._id}>
       <div className="appointment-content">
        <div className="docImg">
             <img src={item.doctorImage} alt="Doctor" />
        </div>
        <div className="docContent">
         <h4>{item.doctorName}</h4>
         <p> {item.doctorSpecialist}</p>
         <p>{item.doctorAddress}</p>
         <p>{item.date}{item.month} {item.year}{" - "}{item.day}{" | "}{item.time}</p>
         <p>Fee: {item.appointmentFee}</p>
         <button onClick={() => handlecancelAppointment(item._id)}>Cancel Appointment</button>
        </div>
       </div>
      </div>
     ))
    ) : (
     <p>No appointment details available.</p>
    )}
   </div>
  </>
 );
};

export default Myappointment;
