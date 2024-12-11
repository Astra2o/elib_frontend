import axios from 'axios';
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { conf } from '../../config/conf';

const CaptainLogout = () => {
  const token = localStorage.getItem('access-token');
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      if (token) {
        try {
          const response = await axios.get(`${conf.port}/api/captain/logout`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            // Clear local storage
            localStorage.removeItem('access-token');
            localStorage.removeItem('captain');
            localStorage.removeItem('user-type');

            // Navigate to captain login
            navigate('/captain-login');
          }
        } catch (error) {
          console.error('Error during logout:', error);
          localStorage.removeItem('access-token'); // Clear token in case of error
          navigate('/captain-login'); // Redirect even if logout API fails
        }
      } else {
        navigate('/captain-login'); // Redirect if no token is present
      }
    };

    logout();
  }, []); // Dependencies to ensure the effect runs correctly

  return <div>Logging you out...</div>;
};

export default CaptainLogout;
