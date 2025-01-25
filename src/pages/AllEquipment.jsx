import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './allequipment.css'
import Footer from "../components/Footer";
const AllEquipment = () => {
  // Sample product data
  const products = [
    {
      title: "Chandan",
      description: "A short description of Prashad.",
      image: "/images/chandan.jpg",
      link: "https://www.youtube.com/",
    },
    {
      title: "DhoopBatti",
      description: "A short description of Prashad.",
      image: "/images/dhoopbatti.jpg",
      link: "/buy/prashad",
    },
    {
      title: "AgarBatti",
      description: "A short description of Prashad.",
      image: "/images/agarbatti.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Sankh",
      description: "A short description of Prashad.",
      image: "/images/sankh.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Locket",
      description: "A short description of Prashad.",
      image: "/images/locket.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Kangan",
      description: "A short description of Prashad.",
      image: "/images/kangan.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Haridas ji",
      description: "A short description of Prashad.",
      image: "/images/haridaslocket.webp",
      link: "/buy/prashad",
    },
    {
      title: "Combo",
      description: "A short description of Prashad.",
      image: "/images/allloket.webp",
      link: "/buy/prashad",
    },
    {
        title: "Bracelet",
        description: "A short description of Prashad.",
        image: "/images/bracelet.jpg",
        link: "/buy/prashad",
      },
      {
        title: "Tulsi Mala",
        description: "A short description of Prashad.",
        image: "/images/tulsimala.jpg",
        link: "/buy/prashad",
      },
  ];

  return (
    <>
    <Navbar></Navbar>
    <Container className="pq-5 equipmet-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 equipmet-grid-title"></h2>
      <Row className="g-4 equipmet-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="equipmet-grid-col">
            <Card className="h-100 equipmet-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="equipmet-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="equipmet-card-body">
                <Card.Title className="equipmet-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="equipmet-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    href={product.link}
                    variant="primary"
                    className="equipmet-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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

export default AllEquipment ;
