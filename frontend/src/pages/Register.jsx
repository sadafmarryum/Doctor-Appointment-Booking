import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../css/Login.css'
import userIcon from '../assets/form/person.png'
import emailIcon from '../assets/form/email.png'
import passwordIcon from '../assets/form/password.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import show from '../assets/show.png';
import hide from '../assets/hide.png';


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
		const { name, email, pwd ,cpwd } = data;
		console.log(data);

		try {
			const res = await fetch("http://localhost:8009/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ name, email, pwd, cpwd })
			});

			const Data = await res.json();

			if (res.status === 201) {
				toast.success("Form submitted successfully");
				const userRes = await fetch(`http://localhost:8009/user/${email}`);
				const userData = await userRes.json();
				navigate("/", { state: { user: userData } });
				reset();
			}
			else {
				toast.error(Data.error || "Failed to register user");
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
					<div className='text'>Create account</div>
					<div className='underline'></div>
				</div>
				<div className='inputs'>
					<p>Please SignUp to book appointment</p>

					<div className='input'>
						<img src={userIcon} alt="user-icon" />
						<input
							type="text"
							placeholder="Full name"
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

					<div className='input'>
						<img src={emailIcon} alt="email-icon" />
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

					<div className='input'>
						<img src={passwordIcon} alt="pwd-icon" />
						<input type={(pwdshow) ? 'text' : 'password'}
							placeholder="Password"
							{...register("pwd",
								{
									required: "Password is required",
									minLength: { value: 4, message: "Password must be more than 4 characters" },
									maxLength: { value: 12, message: "Password cannot exceed more than 12 characters" }
								})}
						/>
						<button className="showHide"
							onClick={() => setpwdshow(!pwdshow)}> {(pwdshow) ? <img src={show} alt="show-icon" /> : <img src={hide} alt="hide-icon" />}</button>
					</div>
					{errors.pwd && <p className="error">{errors.pwd.message}</p>}

					<div className='input'>
						<img src={passwordIcon} alt="pwd-icon" />
						<input type={(cpwdshow) ? 'text' : 'password'}
							placeholder="Confirm Password"
							{...register("cpwd",
								{
									required: "Confirm Password is required",
									validate: (value) =>
										value === pwd || "Confirm Password do not match",
								})}
						/>
						<button className="showHide" 
							onClick={() => setcpwdshow(!cpwdshow)}> {(cpwdshow) ? <img src={show} alt="show-icon" /> : <img src={hide} alt="hide-icon" />}</button>
					</div>
					{errors.cpwd && <p className="error">{errors.cpwd.message}</p>}
				</div>

				<div className='create-account'>
					<div className="btn-create-account">
						<button type="submit">Create account</button>
					</div>
				</div>
				<p id="alreadyAccount">Already have an account? <span><Link
					to="/login" className='link'>Login here</Link></span></p>

			</form>
		</>
	)
}

export default Register
