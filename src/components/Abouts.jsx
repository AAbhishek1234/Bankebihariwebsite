// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const About = () => {
//   return (
//     <div className="container py-5" style={{backgroundColor:'#FFB733',borderRadius:"2rem",boxShadow:"0 0 2rem #553700",top:"6rem"}}>
      
//       <div className="row justify-content-center">
//         <div className="col-lg-8 text-center">
//           <h1 className="display-4 mb-4" style={{fontWeight:"700",fontSize:"40px"}} > 
//             Glimpses of Major Festivals in Shree Banke Bihari Mandir 
//           </h1>
//         </div>
//       </div>
      
//       <div className="d-none d-md-block">
//         <div className="row text-center">
//           <div className="col-lg-4 mb-4">
//             <div className="card h-100">
//               <img src="/images/janmastmi.webp" className="card-img-top" alt="Janmashtami" />
//               <div className="card-body">
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Janmashtami</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 mb-4">
//             <div className="card h-100">
//               <img src="/images/holi.webp" className="card-img-top" alt="Holi" style={{width:"20rem", marginLeft:"1rem", marginTop:"3rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Holi Mahotsav</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 mb-4">
//             <div className="card h-100">
//               <img src="/images/radharani.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Radhaashtami</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 mb-4">
//             <div className="card h-100">
//               <img src="/images/teej.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Haryali Teej</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 mb-4">
//             <div className="card h-100">
//               <img src="/images/nandotsav.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Nandotsav</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 mb-4">
//             <div className="card h-100">
//               <img src="/images/diwali2.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Diwali</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </div>

          
//         </div>
//       </div>

//       <div className="d-md-none">
//         <Carousel>
//           <Carousel.Item>
//             <div className="card h-100">
//               <img src="/images/janmastmi.webp" className="card-img-top" alt="Janmashtami" />
//               <div className="card-body">
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Janmashtami</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item>
//             <div className="card h-100">
//               <img src="/images/holi.webp" className="card-img-top" alt="Holi" style={{width:"20rem", marginLeft:"1rem", marginTop:"3rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Holi Mahotsav</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item>
//             <div className="card h-100">
//               <img src="/images/radharani.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Radhaashtami</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item>
//             <div className="card h-100">
//               <img src="/images/teej.jpg" className="card-img-top" alt="Holi" style={{width:"20rem", marginLeft:"1rem", marginTop:"3rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Haryali Teej</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item>
//           <div className="col-lg-4 mb-4">
//             <div className="card h-100">
//               <img src="/images/nandotsav.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Nandotsav</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </div>
//           </Carousel.Item>
//           <Carousel.Item>
//           <div className="col-lg-4 mb-4">
//             <div className="card h-100">
//               <img src="/images/diwali2.jpg" className="card-img-top" alt="Radhaashtami" style={{height:"16rem", width:"20rem", marginTop:"3rem", marginLeft:"1rem"}} />
//               <div className="card-body" style={{marginTop:"3rem"}}>
//                 <h5 className="card-title" style={{color:"#FFAE1A"}}>Diwali</h5>
//                 <p className="card-text" style={{color:"#FFAE1A"}}>Banke Bihari Mandir</p>
//               </div>
//             </div>
//           </div>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default About;









import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: "#FFB733",
        borderRadius: "2rem",
        boxShadow: "0 0 2rem #553700",
        marginTop: "2rem",
      }}
    >
      {/* Title */}
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h1
            className="display-4 mb-4"
            style={{ fontWeight: "700", fontSize: "40px" }}
          >
            Glimpses of Major Festivals in Shree Banke Bihari Mandir
          </h1>
        </Col>
      </Row>

      {/* Desktop View */}
      <div className="d-none d-md-block">
        <Row className="text-center">
          {/* Festival Cards */}
          {[
            {
              image: "/images/janmastmi.webp",
              title: "Janmashtami",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/holi.webp",
              title: "Holi Mahotsav",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/radharani.jpg",
              title: "Radhaashtami",
              text: "Banke Bihari Mandir",
            },
          
            {
              image: "/images/nandotsav.jpg",
              title: "Nandotsav",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/teej.jpg",
              title: "Haryali Teej",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/diwali2.jpg",
              title: "Diwali",
              text: "Banke Bihari Mandir",
            },
          ].map((festival, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={festival.image}
                  alt={festival.title}
                  style={{
                    height: "16rem",
               
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "#FFAE1A" }}>
                    {festival.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#FFAE1A" }}>
                    {festival.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Mobile View with Carousel */}
      <div className="d-md-none">
        <Carousel>
          {[
            {
              image: "/images/janmastmi.webp",
              title: "Janmashtami",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/holi.webp",
              title: "Holi Mahotsav",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/radharani.jpg",
              title: "Radhaashtami",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/teej.jpg",
              title: "Haryali Teej",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/nandotsav.jpg",
              title: "Nandotsav",
              text: "Banke Bihari Mandir",
            },
            {
              image: "/images/diwali2.jpg",
              title: "Diwali",
              text: "Banke Bihari Mandir",
            },
          ].map((festival, index) => (
            <Carousel.Item key={index}>
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={festival.image}
                  alt={festival.title}
                  style={{
                    height: "16rem",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "#FFAE1A" }}>
                    {festival.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#FFAE1A" }}>
                    {festival.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default About;
