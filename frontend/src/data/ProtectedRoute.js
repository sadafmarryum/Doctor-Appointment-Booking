import React, { useContext } from 'react'
import { UserContext } from "../data/UserProvider";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
 const { user } = useContext(UserContext);

 if (!user) {
  return <Navigate to="/" />
 }

 return children;
}

export default ProtectedRoute;
