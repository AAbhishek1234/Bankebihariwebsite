import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './mala.css'
import Footer from "../components/Footer";
const Mala = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  const products = [
    {
      title: "Tulsi Mala",
      description: "A short description of Prashad.",
      image: "/images/tulsimalaa.jpg",
      link: "https://www.youtube.com/",
    },
    {
      title: "Phool Mala",
      description: "A short description of Prashad.",
      image: "/images/phl.jpg",
    },
    {
      title: "RudrakshMala",
      description: "A short description of Prashad.",
      image: "/images/Rudraksha Mala.jpg",
    },
    {
      title: "Bodhi Mala",
      description: "A short description of Prashad.",
      image: "/images/bm.jpg",
    },
    {
      title: "TulsiLeaf Mala",
      description: "A short description of Prashad.",
      image: "/images/tulsig.jpg",
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
    <Navbar></Navbar>
    <div className="productss"style={{ backgroundColor: "#FFB733",borderRadius:"15px",marginLeft:"1rem",marginRight:"1rem",marginTop:"12rem" }}>
    <Container className="pq-5 prashad-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 mala-grid-title">Mala</h2>
      <Row className="g-4 mala-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="mala-grid-col">
            <Card className="h-100 mala-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="mala-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="mala-card-body">
                <Card.Title className="mala-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="mala-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                  onClick={() => handleBuyNow(product)}
                    variant="primary"
                    className="mala-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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
    <Footer></Footer>
    </>
  );
};

export default Mala;
