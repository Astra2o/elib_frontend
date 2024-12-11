import axios from 'axios';
import React from 'react'
import { conf } from '../../config/conf';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const token = localStorage.getItem('access-token')
    const navigate =useNavigate()
    try {
        const logout = async () => {
            if (token) {
              try {
                const response = await axios.get(`${conf.port}/api/users/logout`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
                if (response.status==200) {
                    localStorage.removeItem('access-token')
                    localStorage.removeItem('user')
                    localStorage.removeItem('user-type')
                    navigate('/login')
                }
                // setuser(null); // Update the user state
                // console.log('Fetched User:', userdata);
              } catch (error) {
                console.error('Error fetching user:', error);
                navigate('/login'); // Redirect to login on failure
              }
            } else {
              navigate('/login'); // Redirect if no token is present
            }
          };
          logout()
    } catch (error) {
        console.log(error);
        
    }
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout