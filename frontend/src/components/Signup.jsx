import React, { useState } from 'react';

const Signup = () => {
  const [user, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Error messages for form validation
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Login Hook
  const { signup, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault(); 

    // Clear previous error messages
    setUserError("");
    setEmailError("");
    setPasswordError("");
    setErrorMessage("");
    
    // Validate form inputs
    if (!user) {
      setUserError("Please enter a username.");
      return;
    }

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
      await signup(user, email, password);
    } catch (error) {
      // If an error occurs during login, this error message will display
      setErrorMessage("Signup failed. Please check if your username and password is correct."); // Change this after discussing with group
    }
  };

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <label>
          User:
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
          <p className="error">{userError}</p>
        </label>
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

