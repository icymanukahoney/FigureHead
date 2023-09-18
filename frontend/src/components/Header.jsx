// This will be throwing an error for the time being till fixed
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Header = () => {

  const navigate = useNavigate()
  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleLogout = () => {logout()}

  // This is setting up the state to track if the menu is open or not
  // This line sets the default state of the nav bottom to be false so it will not show by default
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This makes the default the login and signup

  // Set up login menu toggle state as well as close when form submit
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginSubmit = () => {
    setIsLoginOpen(false);
  }

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const handleSignupSubmit = () => {
    setIsSignupOpen(false);
  }

  // This is setting the state for the nav bottom to true if the hamburger is clicked
  const handleClick = () => {
    setIsMenuOpen(true);
  };

  const handleProfileClick = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const user_id = user.email
    const path = `/profile/${user_id}`
    navigate(path)
  }

  // get username from submitted email
  const getEmailCharactersBeforeAtSymbol = (email) => {
    const delimiter = '@';
    const parts = email.split(delimiter);
    return parts.length > 1 ? parts[0] : '';
  };

  return (
    <>
    <nav>
      <div className="nav-flex" id="nav-top">
        <Link className="logo" to="/">
          <img src="/img/logo.png" alt="FigureHeads Logo"/> {/* This is the Logo */}
        </Link>
        <h1>FigureHead</h1>
        <i className="fa-solid fa-bars" onClick={handleClick}></i> {/* This is the Hamburger Menu */}
      </div>

      
      {isMenuOpen && ( // this checks to see if the menu is open
        <div className="nav-flex" id="nav-bottom">

          {user ? ( // this checks if the user is logged in
          // If isLoggedIn is true, it renders content for the case when the user is logged in
            <>
              <button className="profile-btn"
              onClick={handleProfileClick}>
                <i className="fa-solid fa-circle-user"></i> {/* This is the Profile Icon */}
                User Name {/* Here is placeholder user name */}
              </button>
        
              <button className="logout-btn"
              onClick={handleLogout}>
                Logout
              </button>              
            </>
          ) : (
          // If isLoggedIn is false, it renders content for the case when the user is not logged in
            <>
              <button className="login-btn"
              onClick={() => {setIsLoginOpen(true)}}>
                Login
              </button>

              <button className="signup-btn"
              onClick={() => {setIsSignupOpen(true)}}>
                Signup
              </button>
            </>
          )}
        </div>
      )}

    </nav>

    {isLoginOpen && <Login  onFormSubmit={handleLoginSubmit} />}
    {isSignupOpen && <Signup onFormSubmit={handleSignupSubmit} />}
    </>
  );
};

export default Header;
