// This will be throwing an error for the time being till fixed
import { Link } from "react-router-dom";
import { useState } from "react";
// This is commented out because it will be used later
// import { useAuthContext } from "../hooks/useAuthContext";

const Header = () => {

  return (
    <nav>
      <div className="nav-flex" id="nav-top">
        <Link className="logo" to="/">
          <img src="/img/logo.png" alt="FigureHeads Logo"/> {/* This is the Logo */}
        </Link>
        <h1>FigureHead</h1>
        <i className="fa-solid fa-bars"></i> {/* This is the Hamburger Menu */}

      </div>
      <div className="nav-flex" id="nav-bottom">
        <div>

          {/* This will be where our @media query chooses to display our login and sign up */}

          {/* Here is placeholder links for the login and sign up for when we need it - it will be commented out till used 

          {/* <Link to="/Login" className="login-btn">
            Login
          </Link>
          <Link to="/Signup" className="signup-btn">
            Signup
          </Link> */}

          {/* This will be where our @media query chooses to display our users name and logout */}

          {/* Here is placeholder links for the users name and logout for when we need it - it will be commented out till used */}
          
          {/* <Link to="/Profile" className="profile-btn">
            <i className="fa-solid fa-circle-user"></i> leave a comment here saying "This is the Profile Icon"
            "Users Name Here
          </Link>
          <Link to="/Logout" className="logout-btn">
            Logout
          </Link> */}

        </div>
      </div>
    </nav>
  );
};

export default Header;
