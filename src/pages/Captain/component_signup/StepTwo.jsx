import { useRef, useState } from 'react';

const StepTwo = ({ formData, handlePrevious, handleRegister }) => {
  const vehicleColorRef = useRef();
  const [localData, setLocalData] = useState(formData);
  const [validationErrors, setValidationErrors] = useState({
    vehicleColor: null,
    vehiclePlate: null,
    vehicleCapacity: null,
    vehicleType: null,
  });

  const validateInputs = () => {
    const errors = {};

    if (localData.vehicleColor.length < 3) {
      errors.vehicleColor = 'Color must be at least 3 characters long';
    }
    if (localData.vehiclePlate.length < 3) {
      errors.vehiclePlate = 'Plate must be at least 3 characters long';
    }
    if (localData.vehicleCapacity <= 0) {
      errors.vehicleCapacity = 'Capacity must be at least 1';
    }
    if (!['car', 'motorcycle', 'auto'].includes(localData.vehicleType)) {
      errors.vehicleType = 'Invalid vehicle type';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      handleRegister(localData);
    }
  };

  const handleChange = (field, value) => {
    
    setLocalData({ ...localData, [field]: value });
  };

  return (
    <div>
   <h2 className="text-2xl mt-6 font-semibold">Vehicle Details  &#x1F697;
   </h2>

    
    <form onSubmit={handleSubmit}>
      <h3 className="text-xl mt-2 font-medium mb-2">Vehicle Color *</h3>
      <input
        ref={vehicleColorRef}
        value={localData.vehicleColor}
        onChange={(e) => handleChange('vehicleColor', e.target.value)}
        className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
          validationErrors.vehicleColor ? 'border-red-500' : localData.vehicleColor ? 'border-green-500' : ''
        }`}
        placeholder="Vehicle Color"
        required
        type="text"
      />
      <div className="h-5">
        {validationErrors.vehicleColor && (
          <p className="text-red-500 text-sm">{validationErrors.vehicleColor}</p>
        )}
      </div>

      <h3 className="text-xl font-medium mb-2">Vehicle Plate *</h3>
      <input
        value={localData.vehiclePlate}
        onChange={(e) => handleChange('vehiclePlate', e.target.value)}
        className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
          validationErrors.vehiclePlate ? 'border-red-500' : localData.vehiclePlate ? 'border-green-500' : ''
        }`}
        placeholder="Vehicle Plate"
        required
        type="text"
      />
      <div className="h-5">
        {validationErrors.vehiclePlate && (
          <p className="text-red-500 text-sm">{validationErrors.vehiclePlate}</p>
        )}
      </div>

      <h3 className="text-xl font-medium mb-2">Vehicle Capacity *</h3>
      <input
        value={localData.vehicleCapacity}
        onChange={(e) => handleChange('vehicleCapacity', e.target.value)}
        className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
          validationErrors.vehicleCapacity ? 'border-red-500' : localData.vehicleCapacity ? 'border-green-500' : ''
        }`}
        placeholder="Vehicle Capacity"
        required
        type="number"
      />
      <div className="h-5">
        {validationErrors.vehicleCapacity && (
          <p className="text-red-500 text-sm">{validationErrors.vehicleCapacity}</p>
        )}
      </div>

      <h3 className="text-xl font-medium mb-2">Vehicle Type *</h3>
      <select
        value={localData.vehicleType}
        onChange={(e) => handleChange('vehicleType', e.target.value)}
        className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
          validationErrors.vehicleType ? 'border-red-500' : localData.vehicleType ? 'border-green-500' : ''
        }`}
        required
      >
        <option  value="">-- Select Type --</option>
        <option      value="car">Car &#128661; </option>
        <option value="motorcycle">Motor cycle 🏍️ </option>
        <option value="auto">Auto &#128762;	 </option>
      </select>

    



      <div className="h-5">
        {validationErrors.vehicleType && (
          <p className="text-red-500 text-sm">{validationErrors.vehicleType}</p>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-300 text-black font-semibold rounded-lg text-lg px-5 py-3"
        >
         &#8592;	 Previous
        </button>
        <button
          type="submit"
          className="bg-[#111] text-white font-semibold rounded-lg text-lg px-5 py-3"
        >
          Register
        </button>
      </div>
    </form>

    </div>
  );
};

export default StepTwo;
