import {Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import Doctor from './layout/Doctor'
import Aboutus from "./layout/Aboutus";
import Contactus from "./layout/Contactus";
import BookAppoimtments from "./layout/BookAppoimtments";
import PersonalInfo from "./layout/PersonalInfo";
import MyProfile from "./layout/MyProfile";
import MyAppointments from "./layout/MyAppointments";
import LogIn from "./layout/LogIn";
import Registeer from "./layout/Registeer";
import Errorpg from "./pages/Errorpg";


function App() {
	return (
		<>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Home />} />
				<Route path="/docAppointment" element={<Doctor/>} />
				<Route path="/about" element={<Aboutus/>} />
				<Route path="/contact" element={<Contactus/>} />
				<Route path="/docAppointment/:docId" element={<BookAppoimtments/>} />
				{/* Protected Routes */}
				<Route path="/personalinfo" element={<PersonalInfo/>} />
				<Route path="/myProfile" element={<MyProfile/>} />
				<Route path="/myappointment" element={<MyAppointments/>} />
				<Route path="/register" element={<Registeer/>} />
				<Route path="/login" element={<LogIn/>} />
				<Route path="*" element={<Errorpg/>} />
			</Routes>
		</>
	);
}

export default App;
