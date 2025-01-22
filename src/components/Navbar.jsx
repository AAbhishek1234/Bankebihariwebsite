// import React from 'react';
// import "./navbar.css";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div style={{ position: "relative" }}>
//       <Link>
//         <img
//           src="/images/abovenav.png"
//           alt="Above Navbar"
//           className="img-fluid"
//           style={{ height: "10rem", width: "auto", position: "absolute", top: "-10rem", left: "50%", transform: "translateX(-50%)" }}
//         />
//       </Link>

//       <Link>
//         <img
//           src="/images/krishna.png"
//           alt="Krishna"
//           className="img-fluid"
//           style={{ height: "8rem", width: "auto", position: "absolute", bottom: "4rem", left: "2rem" }}
//         />
//       </Link>

//       <nav className="navbar navbar-expand-lg navbar-light">
//         <div className="container-fluid" style={{ backgroundColor: "#f28500", boxShadow: "0 0 10px", marginTop: "8rem" }}>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Blog">Blogs</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Visit-Temple">Visit Mandir</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/About-Temple">About Mandir</Link>
//               </li>

//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;



import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./navbar.css";

const MyNavbar = () => {
  const navbarHeight = window.innerWidth < 768 ? 60 : 80;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Images Section */}
      <div style={{ position: "relative", height: "8rem" }}>
        {/* Left-side image */}
        <img
          src="/images/krishna.png"
          alt="Left"
          style={{
            position: "absolute",
            top: "0",
            left: "",
            height: "8rem",
            width: "auto",
          }}
        />

        {/* Right-side image */}
        <img
          src="/images/krishna.png"
          alt="Right"
          style={{
            position: "absolute",
            top: "0",
            right: "5px",
            height: "8rem",
            width: "auto",
          }}
        />
      </div>

      {/* Navbar Section */}
      <Navbar
        expand="lg"
        className="navbar-custom"
        style={{
          marginTop: "0.00rem", // Push navbar below the images
        }}
      >
        <Container>
          <Navbar.Brand
            onClick={scrollToTop}
            style={{
              color: "black",
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif",
              cursor: "pointer",
            }}
          >
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="custom-toggler"
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {/* Home Link */}
              <Nav.Link>
                <Link
                  to="top"
                  smooth={true}
                  duration={10}
                  offset={-navbarHeight}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="nav-link-custom"
                >
                  Home
                </Link>
              </Nav.Link>

              {/* About Us Link */}
              <Nav.Link>
                <Link
                  to="about-us"
                  smooth={true}
                  duration={10}
                  offset={-navbarHeight}
                  className="nav-link-custom"
                >
                  About Mandir
                </Link>
              </Nav.Link>

              {/* Services Link */}
              <Nav.Link>
                <Link
                  to="Our-Programs"
                  smooth={true}
                  duration={10}
                  offset={-navbarHeight}
                  className="nav-link-custom"
                >
                  Visit Mandir
                </Link>
              </Nav.Link>

              {/* Contact Us Link */}
              <Nav.Link>
                <Link
                  to="Footer"
                  smooth={true}
                  duration={10}
                  offset={-navbarHeight}
                  className="nav-link-custom"
                >
                  Blogs
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
