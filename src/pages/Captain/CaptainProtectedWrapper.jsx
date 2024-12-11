import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { conf } from '../../config/conf';
import { CaptainDataContext } from '../../context/CaptainContext';

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('access-token');
  const usertype = localStorage.getItem('user-type');

  const navigate = useNavigate();
  const { captain,setCaptain} = useContext(CaptainDataContext);

  useEffect(() => {
    if (usertype !=='captain') {
      navigate('/')
     }


    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get(`${conf.port}/api/captain/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const captainData = response.data;
          setCaptain(captainData); // Update the user state
          console.log('Fetched User:', captainData);
        } catch (error) {
          console.error('Error fetching user:', error);
          navigate('/login'); // Redirect to login on failure
        }
      } else {
        navigate('/login'); // Redirect if no token is present
      }
    };

    if (!captain) {
      fetchUser(); // Fetch user data only if not already set
    }
  }, [token, navigate]); // Dependencies to avoid unnecessary rerenders

  // Show loading while fetching user data
  if (!captain) {
    return <div>Loading...</div>;
  }

  return <>{children}</>; // Render children when user is set
};

export default CaptainProtectedWrapper;
