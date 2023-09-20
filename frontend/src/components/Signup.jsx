import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Error messages for form validation
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Signup Hook
  const { signup, isLoading, error } = useSignup();

  const handleClose = () => {
    props.onFormSubmit();
  }

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault(); 

    // Clear previous error messages
    setEmailError("");
    setPasswordError("");
    
    // Validate form inputs
    if (!email) {
      setEmailError("Please enter an email.");
      return;
    }

    if (!password) {
      setPasswordError("Please enter a password.");
      return;
    }

      // Attempt to login with the provided email and password
    await signup(email, password);

    if (!error) {
      props.onFormSubmit();
    }
    console.log(error);

  };

  return (
    <div className="signup-wrapper">
      <div className='signup-container'>
        <p className="close-btn" onClick={handleClose}>X</p>
        <h2>Sign up</h2>
        <form className="signup" onSubmit={handleSubmit}>

          <div className="email-input">
            <label>
              <h4>Email:</h4>
              <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <p className="error">{emailError}</p>
            </label>
          </div>
          
          <div className="password-input">
            <label>
              <h4>Password:</h4>
              <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <p className="error">{passwordError}</p>
            </label>
          </div>
          {error && <p className="error">{error}</p>}

          <p className="login-account-btn">Have an account? <span>Log in</span></p>
          <button className="signup-submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
      </div>  
    </div>
  );
};

export default Signup;

