// This will be throwing an error for the time being till fixed
import { Link } from "react-router-dom";
import { useState } from "react";
// This is commented out because it will be used later
// import { useAuthContext } from "../hooks/useAuthContext";

const Header = () => {

  // This is setting up the state to track if the menu is open or not
  // This line sets the default state of the nav bottom to be false so it will not show by default
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This is setting the state for the nav bottom to true if the hamburger is clicked
  const handleClick = () => {
    const [setIsMenuOpen] = useState(true);
  };

  return (
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

          {isLoggedIn ? ( // this checks if the user is logged in
          // If isLoggedIn is true, it renders content for the case when the user is logged in
            <>
              <Link to="/Profile" className="profile-btn">
                <i className="fa-solid fa-circle-user"></i> {/* This is the Profile Icon */}
                User's Name Here {/* Here is placeholder user name */}
              </Link>
        
              <Link to="/Logout" className="logout-btn">
                Logout
              </Link>              
            </>
          ) : (
          // If isLoggedIn is false, it renders content for the case when the user is not logged in
            <>
              <Link to="/Login" className="login-btn">
                Login
              </Link>

              <Link to="/Signup" className="signup-btn">
                Signup
              </Link>
            </>
          )}
        </div>
      )}

    </nav>
  );
};

export default Header;
