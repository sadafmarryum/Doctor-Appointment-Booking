import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/ContactUs'
import Myprofile from './pages/Myprofile'
import Myappointment from './pages/Myappointment'
import Userappointment from "./pages/Userappointment";
import Register from "./pages/Register";
import Personalinfo from "./pages/Personalinfo";


function App() {
	return (
		<>
				<Routes>
					<Route path="/" element={<><Header /><Home />  <Footer /></>} />
					<Route path="/doctors" element={<><Header /><Doctor /> <Footer /></>} />
					{/* <Route path="/doctors/:speciality" element={<Doctor />} /> */}
					<Route path="/about" element={<><Header /><About /> <Footer /></>} />
					<Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
				<Route path="/myProfile" element={<><Header /><Myprofile /></>} />
				<Route path="/userappointment" element={<><Header /><Userappointment /></>} />
					<Route path="/myAppointment" element={<><Header /><Doctor /> <Footer /></>} />
					<Route path="/myAppointment/:docId" element={<><Header /> <Myappointment /> <Footer /></>} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				<Route path="/personalinfo" element={<Personalinfo />} />
				</Routes>
		</>
	);
}

export default App;
