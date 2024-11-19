import React, { useState } from 'react';
import '../css/Doctor.css';
import { doctorsCards } from '../data/doctorsCards';
import { placeholders } from '../data/doctorsCards';
import { Link } from 'react-router-dom';


const Doctor = () => {

 const [filteredDoctors, setFilteredDoctors] = useState(doctorsCards);

 const filterData = (placeholder) => {
  const filtered = doctorsCards.filter(doctor => doctor.specialist === placeholder || placeholder === "All doctors");
  setFilteredDoctors(filtered);
 };

 return (
  <>
   <div className="doctors-parent-container">
    <div className="doctors-content-container">
     <h4>Browse through the doctors specialist</h4>
     <div className="doctors-content">
      <div className="doctor-filter">
       <div>
        {placeholders.map((placeholder, i) => (
         <input key={i} type="text" placeholder={placeholder} readOnly onClick={() => filterData(placeholder)} />
        ))}
       </div>
      </div>

      <div className="doctors-cards-conatiner">
       {filteredDoctors.map((doctor, i) => {
        return (
         <>
          <div className="doctor-card" key={i} >
           <div className="card-img" >
            <Link to={`/myAppointment/${doctor.docId}`}  className='link'> <img src={doctor.image} alt="doc-img" /></Link>
           </div>
           <div className="card-content">
            <p id='green'>{doctor.available}</p>
            <h4>{doctor.name}</h4>
            <p>{doctor.specialist}</p>
           </div>
          </div>
         </>
        )
       })}
      </div>
     </div>
    </div>
   </div>
 
  </>
 )
}

export default Doctor;
