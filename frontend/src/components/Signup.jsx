import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Error messages for form validation
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Signup Hook
  const { signup, isLoading } = useSignup();

  const handleClose = () => {
    props.onFormSubmit();
  }

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault(); 

    // Clear previous error messages
    setEmailError("");
    setPasswordError("");
    setErrorMessage("");
    
    // Validate form inputs
    if (!email) {
      setEmailError("Please enter an email.");
      return;
    }

    if (!password) {
      setPasswordError("Please enter a password.");
      return;
    }

    try {
      // Attempt to login with the provided email and password
      await signup(email, password);
      props.onFormSubmit();
    } catch (error) {
      // If an error occurs during login, this error message will display
      setErrorMessage("Signup failed. Please check if your username and password is correct."); // Change this after discussing with group
    }
  };

  return (
    <div className='signup-container'>
      <p onClick={handleClose}>X</p>
      <form className="signup" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p className="error">{emailError}</p>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <p className="error">{passwordError}</p>
        </label>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Signup;

