import { useState } from 'react';
import StepOne from './component_signup/StepOne';
import StepTwo from './component_signup/StepTwo';
const CaptainSignup = () => {
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
    alert('Registration successful!');
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
