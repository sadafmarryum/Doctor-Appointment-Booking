import React from 'react'
import Header from '../components/Header'
import Myappointment from '../pages/Myappointment'
import ProtectedRoute from '../data/ProtectedRoute'

const MyAppointments = () => {
  return (
   <ProtectedRoute>	<><Header /><Myappointment /></>	</ProtectedRoute>
  )
}

export default MyAppointments
