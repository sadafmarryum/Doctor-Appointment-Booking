import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../css/Login.css'
import userIcon from '../assets/form/person.png'
import emailIcon from '../assets/form/email.png'
import passwordIcon from '../assets/form/password.png'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";


const Register = () => {

	let [pwdshow, setpwdshow] = useState(false);
	let [cpwdshow, setcpwdshow] = useState(false);
	const navigate = useNavigate();
	

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	// Password match validation
	const pwd = watch("pwd");

	let onSubmit = async (data) => {
		navigate("/personalinfo", { state: data });
		reset();
	}


	return (
		<>
			<p id="Account">Already have an account? <span><Link
				to="/login" className='link'>Login here</Link></span></p>
			<div className="formparentContainer">
				<form className='container' onSubmit={handleSubmit(onSubmit)}>
					<div className='header'>
						<div className='text'>Sign Up</div>
						<div className='underline'></div>
					</div>
					<div className='inputs'>
						<div className="inputParent">
							<div className='forminput'>
								<div><img src={userIcon} alt="user-icon" /></div>
								<input
									type="text"
									placeholder="Name"
									{...register("name", {
										required: "Name is required",
										pattern: {
											value: /^[A-Za-z\s]+$/,
											message: "Name only contain alphabets",
										},
									})}
								/>
							</div>
							{errors.name && <p className="error">{errors.name.message}</p>}
						</div>
						<div className="inputParent">
						<div className='forminput'>
								<div>	<img src={emailIcon} id="emailImg" alt="email-icon" /></div>
							<input
								type="email"
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
										required: "Password is required",
										minLength: { value: 4, message: "Password must be more than 4 characters" },
										maxLength: { value: 12, message: "Password cannot exceed more than 12 characters" }
									})}
							/>
								<button className="showHide" type="button"
								onClick={() => setpwdshow(!pwdshow)}> {(pwdshow) ? <IoEyeOutline className="eye" /> : <FaRegEyeSlash className="eye" />}</button>
						</div>
						{errors.pwd && <p className="error">{errors.pwd.message}</p>}
						</div>
							<div className="inputParent">
						<div className='forminput'>
								<div><img src={passwordIcon} alt="pwd-icon" /></div>	
							<input type={(cpwdshow) ? 'text' : 'password'}
									placeholder="Confirm Password"
									{...register("cpwd",
										{
											required: "Confirm Password is required",
											validate: (value) =>
												value === pwd || "Confirm Password do not match",
										})}
								/>
						<button className="showHide" type="button"
									onClick={() => setcpwdshow(!cpwdshow)}> {(cpwdshow) ? <IoEyeOutline className="eye" /> : <FaRegEyeSlash className="eye" />}</button>
						</div>
						{errors.cpwd && <p className="error">{errors.cpwd.message}</p>}
					</div>
					</div>


					<div className='next'>
						<div className="btn-next">
							<button type="submit">Next</button>
						</div>
					</div>


				</form>
				<div className="formImgContainer">

				</div>
			</div>
		</>
	)
}

export default Register
