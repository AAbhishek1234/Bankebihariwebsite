import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './poshak.css'
import Footer from "../components/Footer";
const Poshak = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Immediately sets the scroll position to the top
  }, []);
  // Sample product data
  const products = [
    {
      title: "Green Poshak",
      description: "A short description of Prashad.",
      image: "/images/dress1.webp",
      link: "https://www.youtube.com/",
    },
    {
      title: "White Poshak",
      description: "A short description of Prashad.",
      image: "/images/dress2.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Red Poshak",
      description: "A short description of Prashad.",
      image: "/images/dress3.webp",
      link: "/buy/prashad",
    },
    {
      title: "Yellow Poshak",
      description: "A short description of Prashad.",
      image: "/images/d5.jpeg",
      link: "/buy/prashad",
    },
    {
      title: "Laddu Gopal",
      description: "A short description of Prashad.",
      image: "/images/laddugopali.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Laddu Gopal",
      description: "A short description of Prashad.",
      image: "/images/laddugopal.webp",
      link: "/buy/prashad",
    },
    {
      title: "Laddu Gopal",
      description: "A short description of Prashad.",
      image: "/images/lg.jpg",
      link: "/buy/prashad",
    },
 
  ];

  return (
    <>
    <Navbar></Navbar>
    <Container className="pq-5 poshak-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 poshak-grid-title"></h2>
      <Row className="g-4 poshak-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="poshak-grid-col">
            <Card className="h-100 poshak-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="poshak-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="poshak-card-body">
                <Card.Title className="poshak-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="poshak-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    href={product.link}
                    variant="primary"
                    className="poshak-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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
    <Footer></Footer>
    </>
  );
};

export default Poshak;
