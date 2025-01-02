import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'; 

export const UserContext = createContext();

const UserProvider = ({ children}) => {
  const [user, setUser] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState([]);
  
  useEffect(() => {
    const storedUser = Cookies.get('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  useEffect(() => {
    if (user) {
      Cookies.set('user', JSON.stringify(user), { expires: 7 }); 
    } 
    else {
      Cookies.remove('user'); 
    }
  }, [user]);

  return (

    <UserContext.Provider value={{ user, setUser, appointmentDetails, setAppointmentDetails }}>
      {children}
    </UserContext.Provider>

  )
}

export default UserProvider;
