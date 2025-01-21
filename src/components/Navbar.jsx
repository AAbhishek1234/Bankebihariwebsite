import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Above Navbar Image */}
      <Link>
        <img 
          src="/images/abovenav.png" 
          alt="Above Navbar" 
          className="img-fluid" 
          style={{ height: "10rem", width: "auto", position: "absolute", top: "-10rem", left: "50%", transform: "translateX(-50%)" }} 
        />
      </Link>
      
      {/* Krishna Image */}
      <Link>
        <img 
          src="/images/krishna.png" 
          alt="Krishna" 
          className="img-fluid" 
          style={{ height: "8rem", width: "auto", position: "absolute", bottom: "4rem", left: "2rem" }} 
        />
      </Link>
      
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid" style={{ backgroundColor: "#f28500", boxShadow: "0 0 10px", marginTop: "8rem" }}>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto"> {/* Center the nav items */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Visit-Temple">Visit Mandir</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About-Temple">About Mandir</Link>
              </li>
              {/* <li className="nav-item">
                <button className='donate-button'>Donate</button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
