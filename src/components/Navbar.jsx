

// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-scroll";
// import "./navbar.css";

// const MyNavbar = () => {
//   const navbarHeight = window.innerWidth < 768 ? 60 : 80;

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div>
//       <div style={{ position: "relative", height: "8rem" }}>
//         <img
//           src="/images/krishna.png"
//           alt="Left"
//           style={{
//             position: "absolute",
//             top: "0",
//             left: "",
//             height: "8rem",
//             width: "auto",
//           }}
//         />

//         <img
//           src="/images/krishna.png"
//           alt="Right"
//           style={{
//             position: "absolute",
//             top: "0",
//             right: "5px",
//             height: "8rem",
//             width: "auto",
//           }}
//         />
//       </div>

//       <Navbar
//         expand="lg"
//         className="navbar-custom"
//         style={{
//           marginTop: "0.00rem",
//         }}
//       >
//         <Container>
//           <Navbar.Brand
//             onClick={scrollToTop}
//             style={{
//               color: "black",
//               fontFamily:
//                 "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif",
//               cursor: "pointer",
//             }}
//           >
//             LOGO
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="navbar-nav"
//             className="custom-toggler"
//           />
//           <Navbar.Collapse id="navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link>
//                 <Link
//                   to="top"
//                   smooth={true}
//                   duration={10}
//                   offset={-navbarHeight}
//                   onClick={() =>
//                     window.scrollTo({ top: 0, behavior: "smooth" })
//                   }
//                   className="nav-link-custom"
//                 >
//                   Home
//                 </Link>
//               </Nav.Link>

//               <Nav.Link>
//                 <Link
//                   to="about-us"
//                   smooth={true}
//                   duration={10}
//                   offset={-navbarHeight}
//                   className="nav-link-custom"
//                 >
//                   About Mandir
//                 </Link>
//               </Nav.Link>

//               <Nav.Link>
//                 <Link
//                   to="Our-Programs"
//                   smooth={true}
//                   duration={10}
//                   offset={-navbarHeight}
//                   className="nav-link-custom"
//                 >
//                   Visit Mandir
//                 </Link>
//               </Nav.Link>

//               <Nav.Link>
//                 <Link
//                   to="Footer"
//                   smooth={true}
//                   duration={10}
//                   offset={-navbarHeight}
//                   className="nav-link-custom"
//                 >
//                   Blogs
//                 </Link>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default MyNavbar;







// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-scroll";
// import "./navbar.css";

// const MyNavbar = () => {
//   const navbarHeight = window.innerWidth < 768 ? 60 : 80;

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div>
//       <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1020 }}>
//         <img
//           src="/images/krishna.png"
//           alt="Left"
//           style={{
//             position: "absolute",
//             top: "0",
//             left: "10px",
//             height: "8rem",
//             width: "auto",
//           }}
//         />

//         <img
//           src="/images/krishna.png"
//           alt="Right"
//           style={{
//             position: "absolute",
//             top: "0",
//             right: "10px",
//             height: "8rem",
//             width: "auto",
//           }}
//         />
//       </div>

//       <Navbar
//         expand="lg"
//         className="navbar-custom"
//         style={{
//           position: "fixed",
//           top: "8rem", 
//           width: "100%",
//           zIndex: 1010,
//           backgroundColor: "white", 
//         }}
//       >
//         <Container>
//           <Navbar.Brand
//             onClick={scrollToTop}
//             style={{
//               color: "black",
//               fontFamily:
//                 "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif",
//               cursor: "pointer",
//             }}
//           >
//             LOGO
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="navbar-nav"
//             className="custom-toggler"
//           />
//           <Navbar.Collapse id="navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link>
//                 <Link
//                   to="top"
//                   smooth={true}
//                   duration={10}
//                   offset={-navbarHeight}
//                   onClick={() =>
//                     window.scrollTo({ top: 0, behavior: "smooth" })
//                   }
//                   className="nav-link-custom"
//                 >
//                   Home
//                 </Link>
//               </Nav.Link>

//               <Nav.Link>
//                 <Link
//                   to="about-us"
//                   smooth={true}
//                   duration={10}
//                   offset={-navbarHeight}
//                   className="nav-link-custom"
//                 >
//                   About Mandir
//                 </Link>
//               </Nav.Link>

//               <Nav.Link>
//                 <Link
//                   to="Our-Programs"
//                   smooth={true}
//                   duration={10}
//                   offset={-navbarHeight}
//                   className="nav-link-custom"
//                 >
//                   Visit Mandir
//                 </Link>
//               </Nav.Link>


//               <Nav.Link>
//                 <Link
//                   to="Footer"
//                   smooth={true}
//                   duration={10}
//                   offset={-navbarHeight}
//                   className="nav-link-custom"
//                 >
//                   Blogs
//                 </Link>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default MyNavbar;

















import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./navbar.css";

const MyNavbar = () => {
  const navbarHeight = 80; // Height of the navbar
  const imageHeight = 110; // Height of the top images (adjust based on your design)

  return (
    <div>
      {/* Fixed Images Section */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: `${imageHeight}px`, // Set height for the image container
          zIndex: 1020,
          backgroundImage: "url('/images/web-background.jpg')",
          backgroundSize: "cover"
        }}
      >
        {/* Left-side Image */}
        <img
          src="/images/krishna.png"
          alt="Left"
          style={{
            position: "absolute",
            top: "0rem",
            left: "10px",
            height: `${imageHeight}px`, // Adjust height within the container
            width: "auto",
          }}
        />

        {/* Right-side Image */}
        <img
          src="/images/krishna.png"
          alt="Right"
          style={{
            position: "absolute",
            top: "0rem",
            right: "10px",
            height: `${imageHeight}px`,
            width: "auto",
          }}
        />
      </div>

      {/* Fixed Navbar Section */}
      <Navbar
        expand="lg"
        className="navbar-custom"
        style={{
          position: "fixed",
          top: `${imageHeight}px`, // Navbar starts right after images
          width: "100%",
          zIndex: 1010,
          backgroundColor: "#f39c12",
        
        }}
      >
        <Container>
          <Navbar.Brand
            style={{
              color: "white",
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif",
              cursor: "pointer",
            }}
          >
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link
                  to="top"
                  smooth={true}
                  duration={10}
                  className="nav-link-custom"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="about-us"
                  smooth={true}
                  duration={10}
                  className="nav-link-custom"
                >
                  About Mandir
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="Our-Programs"
                  smooth={true}
                  duration={10}
                  className="nav-link-custom"
                >
                  Visit Mandir
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="Footer"
                  smooth={true}
                  duration={10}
                  className="nav-link-custom"
                >
                  Blogs
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      {/* <div
        style={{
          paddingTop: `${imageHeight + navbarHeight}px`, // Push content below fixed images and navbar
        }}
      >
       
      </div> */}
    </div>
  );
};

export default MyNavbar;
