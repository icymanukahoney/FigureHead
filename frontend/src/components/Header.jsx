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
          <img src="#" alt="#" />
        </Link>
        <h1>FigureHead</h1>
        <i class="fa-solid fa-bars"></i>

      </div>
      <div className="nav-flex" id="nav-bottom"></div>
    </nav>
  );
};

export default Header;
