import React from 'react'
import '../css/Personalinfo.css'
import { Link } from 'react-router-dom'

const Personalinfo = () => {
 return (
  <>
   <form className='infoform'>
    <div className="personalInfo">
     <div className='header'>
      <div className='text'>Personal Information</div>
      <div className='underline'></div>
     </div>

     <div className="infoinputs">
      <div className="infoinput">
       <label >Name:</label><br />
       <input type="text" />
      </div>

      <div className="infoinput">
       <label >Email:</label><br />
       <input type="text" />
      </div>

      <div className="infoinput">
       <label >Phone:</label><br />
       <input type="text" />
      </div>

      <div className="infoinput">
       <label >Address:</label><br />
       <input type="text" />
      </div>

      <div className="infoinput">
       <label >Birthady:</label><br />
       <input type="text" />
      </div>

      <div className="infoinput">
       <label >Gender:</label><br />
       <input type="text" />
      </div>
     </div>


     <div className='create-account'>
      <div className="btn-create-account">
       <button type="submit"><Link to="/myProfile" className='link'>Submit Infomation</Link></button>
      </div>
     </div>
    </div>


   </form>
  </>
 )
}

export default Personalinfo
