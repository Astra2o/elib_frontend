import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const StepOne = ({ formData, handleNext }) => {
  const firstnameRef = useRef();
  const [localData, setLocalData] = useState(formData);
  const [validationErrors, setValidationErrors] = useState({
    firstname: null,
    email: null,
    password: null,
    confirmpassword: null,
  });

  const validateInputs = () => {
    const errors = {};

    if (localData.firstname.length < 3) {
      errors.firstname = 'First name must be at least 3 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(localData.email)) {
      errors.email = 'Invalid Email';
    }

    if (localData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (localData.password !== localData.confirmpassword) {
      errors.confirmpassword = 'Passwords do not match';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      handleNext(localData);
    }
  };

  const handleChange = (field, value) => {
    setLocalData({ ...localData, [field]: value });
  };

  return (
    <div>
            <h2 className="text-2xl mt-10 font-semibold">Register as a Captain 👋</h2>

   
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 mt-4">
        <div>
          <h3 className="text-xl font-medium mb-2">First Name *</h3>
          <input
            ref={firstnameRef}
            value={localData.firstname}
            onChange={(e) => handleChange('firstname', e.target.value)}
            className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
              validationErrors.firstname ? 'border-red-500' : localData.firstname ? 'border-green-500' : ''
            }`}
            placeholder="First Name"
            required
            type="text"
          />
          <div className="h-5">
            {validationErrors.firstname && <p className="text-red-500 text-sm">{validationErrors.firstname}</p>}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Last Name</h3>
          <input
            value={localData.lastname}
            onChange={(e) => handleChange('lastname', e.target.value)}
            className="border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg"
            placeholder="Last Name"
            type="text"
          />
        </div>
      </div>

      <h3 className="text-xl font-medium mb-2">Email *</h3>
      <input
        value={localData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
          validationErrors.email ? 'border-red-500' : localData.email ? 'border-green-500' : ''
        }`}
        placeholder="email@ex.com"
        required
        type="email"
      />
      <div className="h-5">
        {validationErrors.email && <p className="text-red-500 text-sm">{validationErrors.email}</p>}
      </div>

      <h3 className="text-xl font-medium mb-2">Password *</h3>
      <input
        value={localData.password}
        onChange={(e) => handleChange('password', e.target.value)}
        className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
          validationErrors.password ? 'border-red-500' : localData.password ? 'border-green-500' : ''
        }`}
        placeholder="*******"
        required
        type="password"
      />
      <div className="h-5">
        {validationErrors.password && <p className="text-red-500 text-sm">{validationErrors.password}</p>}
      </div>

      <h3 className="text-xl font-medium mb-2">Confirm Password *</h3>
      <input
        value={localData.confirmpassword}
        onChange={(e) => handleChange('confirmpassword', e.target.value)}
        className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
          validationErrors.confirmpassword ? 'border-red-500' : localData.confirmpassword ? 'border-green-500' : ''
        }`}
        placeholder="*******"
        required
        type="password"
      />
      <div className="h-5">
        {validationErrors.confirmpassword && <p className="text-red-500 text-sm">{validationErrors.confirmpassword}</p>}
      </div>
    <div className='flex flex-row justify-end'>

    
      <button
        type="submit"
        className="bg-[#111] text-white font-semibold  mb-4 rounded-lg  text-lg px-5 py-3 mt-2"
      >
        Next <span className=''>&#8594;</span> 	
      </button>
      </div>
      <p>
            Have an Account? <Link to="/captain-login" className="text-blue-600">Login</Link>
          </p>
    </form>
    </div>
  );
};

export default StepOne;
