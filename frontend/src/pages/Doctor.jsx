import React, { useState, useEffect } from 'react';
import '../css/Doctor.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { doctorsCards } from '../data/doctorsCards';
import { placeholders } from '../data/doctorsCards';
import { Link } from 'react-router-dom';


const Doctor = () => {

 const [filteredDoctors, setFilteredDoctors] = useState(doctorsCards);

 const filterData = (placeholder) => {
  const filtered = doctorsCards.filter(doctor => doctor.specialist === placeholder || placeholder === "All doctors");
  setFilteredDoctors(filtered);
 };

 ////for pagination
 const [currentPg, setcurrentPg]= useState(1);
 const [rowperPg, setrowperPg] = useState(8);
 const indexLastItem = currentPg * rowperPg;
 const indexfirstItem = indexLastItem - rowperPg;
 const currentItems = filteredDoctors.slice(indexfirstItem, indexLastItem);
 const totalPages = Math.ceil(filteredDoctors.length/rowperPg);


  // Responsive rows per page
  const updateRowsPerPage = () => {
    if (window.innerWidth <= 600) setrowperPg(4);
    else if (window.innerWidth <= 1024) setrowperPg(6);
    else setrowperPg(8);
  };

  useEffect(() => {
    updateRowsPerPage();
    window.addEventListener('resize', updateRowsPerPage);
    return () => window.removeEventListener('resize', updateRowsPerPage);
  }, []);

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
       {currentItems.map((doctor, i) => {
        return (
         <>
          <div className="doctor-card" key={i} >
           <div className="card-img" >
            <Link to={`/docAppointment/${doctor.docId}`}  className='link'>
             <img src={doctor.image} alt="doc-img" /></Link>
           </div>
           <div className="card-content">
            <p id='green'>{doctor.available}</p>
            <h5>{doctor.name}</h5>
            <p>{doctor.specialist}</p>
           </div>
          </div>
         </>
        )
       })}
   
      </div>
     </div>  
    </div>
       <div className="pagination">
         <button
           disabled={currentPg === 1}
           onClick={() => setcurrentPg((prev) => Math.max(prev - 1, 1))}>
           <GrPrevious id='pre' />
         </button>

         {Array.from({ length: totalPages }, (_, i) => (
           <button
             key={i}
             className={currentPg === i + 1 ? "active" : ""}
             onClick={() => setcurrentPg(i + 1)}>
             {i + 1}
           </button>
         ))}

         <button
           disabled={currentPg === totalPages}
           onClick={() => setcurrentPg((prev) => Math.min(prev + 1, totalPages))}>
           <GrNext id='next' />
         </button>
       </div>
   </div>
 
  </>
 )
}

export default Doctor;
