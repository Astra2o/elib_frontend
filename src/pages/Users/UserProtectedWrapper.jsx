import { useContext, useEffect } from 'react';
import { UserDataContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { conf } from '../../config/conf';

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('access-token');
  const navigate = useNavigate();
  const { user, setuser } = useContext(UserDataContext);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get(`${conf.port}/api/users/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userdata = response.data;
          setuser(userdata); // Update the user state
          console.log('Fetched User:', userdata);
        } catch (error) {
          console.error('Error fetching user:', error);
          navigate('/login'); // Redirect to login on failure
        }
      } else {
        navigate('/login'); // Redirect if no token is present
      }
    };

    if (!user) {
      fetchUser(); // Fetch user data only if not already set
    }
  }, [token, user, setuser, navigate]); // Dependencies to avoid unnecessary rerenders

  // Show loading while fetching user data
  if (!user) {
    return <div>Loading...</div>;
  }

  return <>{children}</>; // Render children when user is set
};

export default UserProtectedWrapper;
