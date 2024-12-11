import { useContext, useEffect, useState } from 'react';
import StepOne from './component_signup/StepOne';
import StepTwo from './component_signup/StepTwo';
import axios from 'axios';
import { conf } from '../../config/conf';
import { CaptainDataContext } from '../../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
const CaptainSignup = () => {
  const navigate=useNavigate()
  const {captain,setCaptain}=useContext(CaptainDataContext)
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    vehicleColor: '',
    vehiclePlate: '',
    vehicleCapacity: '',
    vehicleType: '',
  });
  const token = localStorage.getItem('access-token')

  useEffect(() => {
    if(token){
        navigate('/')
    }
      
  }, [])

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(2); // Move to step 2
  };

  const handlePrevious = () => {
    setStep(1); // Return to step 1
  };

  const handleRegister = (data) => {
    setFormData({ ...formData, ...data });
    console.log('Registration Data:', { ...formData, ...data });
    // alert('Registration successful!');
    console.log(formData);

    const registerpost= async()=>{
      const response = await axios.post(`${conf.port}/api/captain/register`,{  ...formData, ...data})
      if(response.status === 201){
        const data = response.data;
        console.log(data.captain);
        
        setCaptain(data.captain)
        localStorage.setItem('access-token',data.token);
        localStorage.setItem('user-type','captain')

        localStorage.getItem('access-token');
        
        // console.log(user);
        navigate('/')
        
      }
    }

    registerpost()
    

  };

  return (
    <div className="p-7 flex flex-col justify-between h-full min-h-screen  w-full">
      <div>
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt="Uber Logo"
        />
        {step === 1 ? (
          <StepOne formData={formData} handleNext={handleNext} />
        ) : (
          <StepTwo formData={formData} handlePrevious={handlePrevious} handleRegister={handleRegister} />
        )}
      </div>
    </div>
  );
};

export default CaptainSignup;
