import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../css/Login.css';
import emailIcon from '../assets/form/email.png';
import passwordIcon from '../assets/form/password.png';
import show from '../assets/show.png';
import hide from '../assets/hide.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Login = () => {

 let [pwdshow, setpwdshow] = useState(false);
 const navigate = useNavigate();
 const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
 } = useForm();

 let onSubmit = async (data) => {
  const { email, pwd } = data;

  try {
   const response = await fetch("http://localhost:8009/login", {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, pwd })
   });

   const resData = await response.json();
   if (response.status === 200) {
    toast.success("User Login Successfully");
    reset();
    const userRes = await fetch(`http://localhost:8009/user/${email}`);
    const userData = await userRes.json();
     navigate("/", { state: { user: userData } });
    
   }
   else {
    toast.error(resData.error || "Failed to login");
   }
  }
  catch (error) {
   console.log(error);
  }
 }


 return (
  <>
   <ToastContainer />
   <form className='container' onSubmit={handleSubmit(onSubmit)}>
    <div className='header'>
     <div className='text'>Login</div>
     <div className='underline'></div>
    </div>
    <div className='inputs'>
     <p>Please Login to book appointment</p>

     <div className='input'>
      <img src={emailIcon} alt="email-icon" />
      <input
       type="email"
       placeholder="Email address"
       {...register("email", {
        pattern: {
         value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
         message: "Invalid email format",
        },
       })}
      />
     </div>
     {errors.email && <p className="error">{errors.email.message}</p>}

     <div className='input'>
      <img src={passwordIcon} alt="pwd-icon" />
      <input type={(pwdshow) ? 'text' : 'password'}
       placeholder="Password"
       {...register("pwd",
        {
         required: "Password is required"
        })}
      />
      <button className="showHide" type="button"
       onClick={() => setpwdshow(!pwdshow)}> {(pwdshow) ? <img src={show} alt="show-icon" /> : <img src={hide} alt="hide-icon" />}
       </button>
     </div>
     {errors.pwd && <p className="error">{errors.pwd.message}</p>}

    </div>


    <div className='create-account'>
     <div className="btn-create-account">
      <button type="submit">Login</button>
     </div>
    </div>

    <p id="alreadyAccount">Create a new account <span><Link
     to="/register" className='link'>Click here</Link></span></p>


   </form>
  </>
 )
}

export default Login
