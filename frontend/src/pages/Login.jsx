import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../css/Login.css';
import emailIcon from '../assets/form/email.png';
import passwordIcon from '../assets/form/password.png';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../data/UserProvider";
import Cookies from 'js-cookie'; 


const Login = () => {

  let [pwdshow, setpwdshow] = useState(false);
  const { setUser } = useContext(UserContext);
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
        navigate("/");
        reset();
        const userRes = await fetch(`http://localhost:8009/Users/${email}`);
        const userData = await userRes.json();
        setUser(userData); //update context

        Cookies.set('user', JSON.stringify(userData), { expires: 7 });
        setTimeout(() => {
        }, 500)

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
      <p id="alreadyAccount">Create a new account <span><Link
        to="/register" className='link'>Click here</Link></span></p>
      <div className="formparentContainer">
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
          <div className='header' >
            <div className='text'>Login</div>
            <div className='underline'></div>
          </div>
          <div className='inputs'>
            <div className="inputParent">
              <div className='forminput'>
                <div> <img src={emailIcon} id="emailImg" alt="email-icon" /></div>
                <input
                  type="text"
                  placeholder="Email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
              </div>
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="inputParent">
              <div className='forminput'>
                <div><img src={passwordIcon} alt="pwd-icon" /></div>
                <input type={(pwdshow) ? 'text' : 'password'}
                  placeholder="Password"
                  {...register("pwd",
                    {
                      required: "Password is required"
                    })}
                />
                <button className="showHide" type="button"
                  onClick={() => setpwdshow(!pwdshow)}> {(pwdshow) ? <IoEyeOutline className="eye" /> : <FaRegEyeSlash className="eye" />}
                </button>
              </div>
              {errors.pwd && <p className="error">{errors.pwd.message}</p>}
            </div>
          </div>

          <div className='next'>
            <div className="btn-next">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
        <div className="formImgContainer">
        </div>
      </div>
    </>
  )
}

export default Login
