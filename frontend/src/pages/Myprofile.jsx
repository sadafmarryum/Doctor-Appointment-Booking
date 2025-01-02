import React, { useContext, useState } from 'react';
import '../css/Myprofile.css';
import PP from "../assets/profileimg.webp"
import { UserContext } from "../data/UserProvider";
import { toast } from 'react-toastify';

const Myprofile = () => {
 const { user, setUser } = useContext(UserContext);
 const [edit, setEdit] = useState(false); 
 const [updatedUser, setUpdatedUser] = useState({ ...user }); // hold updated values

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUpdatedUser((prev) => ({ ...prev, [name]: value }));
 };

 // Save updated information
 const handleSave = async (updatedUser) => {
  try {
   const response = await fetch('http://localhost:8009/personalinfo', {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...updatedUser, id: user._id }),
   });

   if (!response.ok) {
     toast.error('Failed to update profile');
   }
   const data = await response.json(); 
   setUser(data); 
   setEdit(false); 
  } 
  catch (error) {
   toast.error('Failed to save changes. Please try again.');
  } 
 };

 return (
  <div className='Profile-parent-container'>
   <div className="myprofile">
    <div className='myprofile-pic'>
     <img src={PP} id='myprofile-pic' alt="User Profile" />
     <h2>My Profile</h2>
    </div>
    <div className="myprofile-content">
     <p className='underlinepra'>Contact Information</p>
     <div className='row'>
      <h4>Name:</h4>
      {edit ? (
     
       <input
        type="text"
        name="name"
        value={updatedUser.name}
        onChange={handleInputChange}
       />
      ) : (
       <p>{user.name}</p>
      )}
     </div>
     <div className='row'>
      <h4>Email:</h4>
      {edit ? (
       <input
        type="email"
        name="email"
        value={updatedUser.email}
        onChange={handleInputChange}
       />
      ) : (
       <p>{user.email}</p>
      )}
     </div>
     <div className='row'>
      <h4>Phone:</h4>
      {edit ? (
       <input
        type="text"
        name="phoneno"
        value={updatedUser.phoneno}
        onChange={handleInputChange}
               />
      ) : (
       <p>{user.phoneno}</p>
      )}
     </div>
     <div className='row'>
      <h4>Address:</h4>
      {edit ? (
       <input
        type="text"
        name="address"
        value={updatedUser.address}
        onChange={handleInputChange}
       />
      ) : (
       <p>{user.address}</p>
      )}
     </div>
     <p className='underlinepra'>Basic Information</p>
     <div className='row'>
      <h4>Gender:</h4>
      {edit ? (
       <input
        type="text"
        name="gender"
        value={updatedUser.gender}
        onChange={handleInputChange}
        readOnly
       />
      ) : (
       <p>{user.gender}</p>
      )}
     </div>
     <div className='row'>
      <h4>Birthday:</h4>
      {edit ? (
       <input
        type="date"
        name="birthday"
        value={updatedUser.birthday}
        onChange={handleInputChange}
        readOnly
       />
      ) : (
       <p>{user.birthday}</p>
      )}
     </div>
    </div>
    <div className="myprofile-btn">
     {!edit ? (
      <button onClick={() => setEdit(true)} id="editbtn">Edit</button>
     ) : (
      <>
       <button onClick={()=>handleSave(updatedUser)}>Save Information</button>
       <button onClick={() => setEdit(false)}>Cancel</button> 
      </>
     )}
    </div>
   </div>
  </div>
 );
};

export default Myprofile;
