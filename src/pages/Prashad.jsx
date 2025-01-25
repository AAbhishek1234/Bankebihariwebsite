
// import React, { useEffect } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./prashad.css";

// const PrashadGrid = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); 
//   }, []);

//   const products = [
//     {
//       title: "56 Bhog",
//       description: "A short description of Prashad.",
//       image: "/images/56bhog.webp",
//       link: "https://www.youtube.com/",
//     },
//     {
//       title: "Makhan Mishri",
//       description: "A short description of Prashad.",
//       image: "/images/makhanmishri.jpg",
//       link: "/buy/prashad",
//     },
//     {
//       title: "Peda",
//       description: "A short description of Prashad.",
//       image: "/images/peda2.jpg",
//       link: "/buy/prashad",
//     },
//     {
//       title: "MilkCake",
//       description: "A short description of Prashad.",
//       image: "/images/milkcake.webp",
//       link: "/buy/prashad",
//     },
//     {
//       title: "MigiPagh",
//       description: "A short description of Prashad.",
//       image: "/images/migipagh.jpeg",
//       link: "/buy/prashad",
//     },
//     {
//       title: "Panchamrit",
//       description: "A short description of Prashad.",
//       image: "/images/panchamrit.jpg",
//       link: "/buy/prashad",
//     },
//     {
//       title: "Khichadi",
//       description: "A short description of Prashad.",
//       image: "/images/khichdi.png",
//       link: "/buy/prashad",
//     },
//     {
//       title: "Besan barfi",
//       description: "A short description of Prashad.",
//       image: "/images/besan-barfi.jpg",
//       link: "/buy/prashad",
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="productss"style={{ backgroundColor: "#FFB733",borderRadius:"15px",marginLeft:"1rem",marginRight:"1rem",marginTop:"12rem" }}>
//       <Container className="pq-5 prashad-grid" style={{ marginTop: "9rem" }}>
//         <h2 className="text-center mb-4 prashad-grid-title">Prashad</h2>
//         <Row className="g-4 prashad-grid-row">
//           {products.map((product, index) => (
//             <Col
//               xs={6}
//               sm={6}
//               md={4}
//               lg={3}
//               key={index}
//               className="prashad-grid-col"
//             >
//               <Card className="h-100 prashad-card shadow-sm">
//                 <Card.Img
//                   variant="top"
//                   src={product.image}
//                   alt={product.title}
//                   className="prashad-card-img"
//                   style={{
//                     height: "180px",
//                     objectFit: "fill",
//                     borderTopLeftRadius: "10px",
//                     borderTopRightRadius: "10px",
//                   }}
//                 />
//                 <Card.Body className="prashad-card-body">
//                   <Card.Title className="prashad-card-title text-center">
//                     {product.title}
//                   </Card.Title>
//                   <Card.Text className="prashad-card-description text-center">
//                   </Card.Text>
//                   <div className="d-flex justify-content-center">
//                     <Button
//                       href={product.link}
//                       variant="primary"
//                       className="prashad-card-button"
//                       style={{
//                         backgroundColor: "#f28500",
//                         border: "none",
//                       }}
//                     >
//                       Buy Now
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PrashadGrid;



import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./prashad.css";

const PrashadGrid = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "56 Bhog",
      description: "A short description of Prashad.",
      image: "/images/56bhog.webp",
    },
    {
      title: "Makhan Mishri",
      description: "A short description of Prashad.",
      image: "/images/makhanmishri.jpg",
    },
    {
      title: "Peda",
      description: "A short description of Prashad.",
      image: "/images/peda2.jpg",
    },
    {
      title: "MilkCake",
      description: "A short description of Prashad.",
      image: "/images/milkcake.webp",
    },
    {
      title: "MigiPagh",
      description: "A short description of Prashad.",
      image: "/images/migipagh.jpeg",
    },
    {
      title: "Panchamrit",
      description: "A short description of Prashad.",
      image: "/images/panchamrit.jpg",
    },
    {
      title: "Khichadi",
      description: "A short description of Prashad.",
      image: "/images/khichdi.png",
    },
    {
      title: "Besan barfi",
      description: "A short description of Prashad.",
      image: "/images/besan-barfi.jpg",
    },
  ];

  const handleBuyNow = (product) => {
    const phoneNumber = "9717024896"; 
    const message = `Hello, I am interested in buying "${product.title}". Could you please provide more details?\nHere is the product image: ${window.location.origin}${product.image}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <div
        className="productss"
        style={{
          backgroundColor: "#FFB733",
          borderRadius: "15px",
          marginLeft: "1rem",
          marginRight: "1rem",
          marginTop: "12rem",
        }}
      >
        <Container className="pq-5 prashad-grid" style={{ marginTop: "9rem" }}>
          <h2 className="text-center mb-4 prashad-grid-title">Prashad</h2>
          <Row className="g-4 prashad-grid-row">
            {products.map((product, index) => (
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                key={index}
                className="prashad-grid-col"
              >
                <Card className="h-100 prashad-card shadow-sm">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    className="prashad-card-img"
                    style={{
                      height: "180px",
                      objectFit: "fill",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <Card.Body className="prashad-card-body">
                    <Card.Title className="prashad-card-title text-center">
                      {product.title}
                    </Card.Title>
                    {/* <Card.Text className="prashad-card-description text-center">
                      {product.description}
                    </Card.Text> */}
                    <div className="d-flex justify-content-center">
                      <Button
                        onClick={() => handleBuyNow(product)}
                        variant="primary"
                        className="prashad-card-button"
                        style={{
                          backgroundColor: "#f28500",
                          border: "none",
                        }}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PrashadGrid;
