import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css"; // Import custom CSS

const ProductGrid = () => {
  // Sample product data
  const products = [
    {
      title: "Prashad",
      description: "Sacred offerings prepared with devotion.",
      image: "/images/peda2.jpg",
      link: "/product/prashad",
    },
    {
      title: "Mala",
      description: "Holy beads for prayer and meditation.",
      image: "/images/tulsimala.jpg",
      link: "/product/mala",
    },
    {
      title: "Bihari ji's Poshak",
      description: "Elegant attires for Lord Krishna.",
      image: "/images/vastra.jpg",
      link: "/product/poshak",
    },
    {
      title: "Pratima",
      description: "Divine idols for your home temple.",
      image: "/images/murti.jpg",
      link: "/product/pratima",
    },
    {
      title: "Paintings",
      description: "Spiritual artwork for inspiration.",
      image: "/images/p8.jpg",
      link: "/product/painting",
    },
    {
        title: " Dresses",
        description: "Traditional outfits for devotion.",
        image: "/images/gopidress.webp",
        link: "/product/dress",
      },
      {
        title: "Daily Uses",
        description: "Fragrant perfumes for rituals.",
        image: "/images/allattribute.webp",
        link: "/product/allequipment",
      },
  ];

  return (
    <div className="products"style={{ backgroundColor: "#FFB733",borderRadius:"15px",marginLeft:"1rem",marginRight:"1rem" }}>
    <Container className="product-grid py-5" style={{marginTop:"2rem"}}>
      <h2 className="xtext-center mb-4" style={{color:"black",fontWeight:"bold",fontSize:"2.5rem"}}>Select By Category</h2>
      <Row className="g-4">
        {products.map((product, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Link to={product.link} className="product-card-link">
              <Card className="h-100 product-card shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="product-card-img"
                />
                <Card.Body>
                  <Card.Title className="product-card-title">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="product-card-description" style={{color:"black"}}>
                    {product.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default ProductGrid;
