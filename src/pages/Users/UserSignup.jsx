import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({
    firstname: null,
    email: null,
    password: null,
    confirmpassword: null,
  });

  // Refs for inputs
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Focus on the First Name input when the page reloads
  useEffect(() => {
    firstnameRef.current.focus();
  }, []);

  const registerUserSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validate First Name
    if (firstname.length < 3) {
      errors.firstname = 'First name must be at least 3 characters long';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Invalid Email';
    }

    // Validate Password
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // Validate Confirm Password
    if (password !== confirmpassword) {
      errors.confirmpassword = 'Passwords do not match';
    }

    // Set Errors or Submit Form
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log({ firstname, lastname, email, password, confirmpassword });
      alert('Form submitted successfully!');
    }
  };

  const handleKeyDown = (e, nextRef, isLast) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isLast) {
        registerUserSubmit(e);
      } else {
        nextRef.current.focus();
      }
    }
  };

  return (
    <div className="p-7 flex flex-col justify-between h-full min-h-screen  w-full">
      <div>
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt=""
        />
        <div className="text-3xl mt-12 font-semibold">Create New Account 👋</div>

        <form>
          <div className="flex flex-row gap-3">
            <div>
              <h3 className="text-xl mt-4 font-medium mb-2">First Name *</h3>
              <input
                onChange={(e) => setfirstname(e.target.value)}
                value={firstname}
                ref={firstnameRef}
                onKeyDown={(e) => handleKeyDown(e, lastnameRef, false)}
                className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
                  validationErrors.firstname ? 'border-red-500' : firstname ?'border-green-500' : ''
                }`}
                placeholder="First Name"
                required
                type="text"
              />
            </div>
            <div>
              <h3 className="text-xl mt-4 font-medium mb-2">Last Name</h3>
              <input
                onChange={(e) => setlastname(e.target.value)}
                value={lastname}
                ref={lastnameRef}
                onKeyDown={(e) => handleKeyDown(e, emailRef, false)}
                className={` border bg-white px-4 py-2 w-full text-lg placeholder:text-base border-black rounded-lg ${lastname?'border-green-500' : ''} `}
                placeholder="Last Name"
                required
                type="text"
              />
            </div>
          </div>
          <div className="h-5">
            {validationErrors.firstname && (
              <p className="text-red-500 text-sm">{validationErrors.firstname}</p>
            )}
          </div>

          <h3 className="text-xl font-medium mb-2">Email *</h3>
          <input
            onChange={(e) => setemail(e.target.value)}
            value={email}
            ref={emailRef}
            onKeyDown={(e) => handleKeyDown(e, passwordRef, false)}
            className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
              validationErrors.email ? 'border-red-500' : email ? 'border-green-500' : ''
            }`}
            placeholder="email@ex.com"
            required
            type="email"
          />
          <div className="h-5">
            {validationErrors.email && (
              <p className="text-red-500 text-sm">{validationErrors.email}</p>
            )}
          </div>

          <h3 className="text-xl font-medium mb-2">Password *</h3>
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            ref={passwordRef}
            onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef, false)}
            className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
              validationErrors.password ? 'border-red-500' : password ? 'border-green-500' : ''
            }`}
            placeholder="*******"
            required
            type="password"
          />
          <div className="h-5">
            {validationErrors.password && (
              <p className="text-red-500 text-sm">{validationErrors.password}</p>
            )}
          </div>

          <h3 className="text-xl font-medium mb-2">Confirm Password *</h3>
          <input
            onChange={(e) => setconfirmpassword(e.target.value)}
            value={confirmpassword}
            ref={confirmPasswordRef}
            onKeyDown={(e) => handleKeyDown(e, null, true)}
            className={`border px-4 py-2 w-full text-lg placeholder:text-base rounded-lg ${
              validationErrors.confirmpassword
                ? 'border-red-500'
                : confirmpassword
                ? 'border-green-500'
                : ''
            }`}
            placeholder="*******"
            required
            type="password"
          />
          <div className="h-5">
            {validationErrors.confirmpassword && (
              <p className="text-red-500 text-sm">{validationErrors.confirmpassword}</p>
            )}
          </div>

          <button
            onClick={(e) => registerUserSubmit(e)}
            className="bg-[#111] text-white font-semibold mb-4 rounded-lg w-full text-lg px-5 py-3 mt-2"
          >
            Register
          </button>
          <p>
            Have an Account? <Link to="/login" className="text-blue-600">Login</Link>
          </p>
        </form>
      </div>
      <div className="w-full">
        <Link
          to="/captain-signup"
          className="bg-[#10b461] flex justify-center text-white font-semibold rounded-lg w-full text-lg px-5 py-3 mt-6"
        >
          Register as a Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
