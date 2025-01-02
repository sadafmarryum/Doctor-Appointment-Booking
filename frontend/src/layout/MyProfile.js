import React from 'react'
import Header from '../components/Header'
import Myprofile from '../pages/Myprofile'
import ProtectedRoute from '../data/ProtectedRoute'

const MyProfile = () => {
  return (
   <ProtectedRoute>	<><Header /><Myprofile /></>	</ProtectedRoute>
  )
}

export default MyProfile
