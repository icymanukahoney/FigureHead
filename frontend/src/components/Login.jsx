import React, { useState } from 'react';

const Login = () => {
  // Users Email and Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error messages for form validation
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Login Hook
  const { login, isLoading } = useLogin();

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
      await login(email, password);
    } catch (error) {
      // If an error occurs during login, this error message will display
      setErrorMessage("Login failed. Please check if your username and password is correct."); // Change this after discussing with group
    }
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
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
          {isLoading ? 'Login...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
