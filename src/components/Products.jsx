import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css"; // Import custom CSS

const ProductGrid = () => {
  // Sample product data
  const products = [
    {
      title: "Prashad",
      description: "This is a short description of Product 1.",
      image: "/images/peda2.jpg",
      link: "/product/prashad",
    },
    {
      title: "Mala",
      description: "This is a short description of Product 2.",
      image: "/images/tulsimala.jpg",
      link: "/product/mala",
    },
    {
      title: "Bihari ji's Poshak",
      description: "This is a short description of Product 3.",
      image: "/images/vastra.jpg",
      link: "/product/poshak",
    },
    {
      title: "Pratima",
      description: "This is a short description of Product 4.",
      image: "/images/murti.jpg",
      link: "/product/pratima",
    },
    {
      title: "Paintings",
      description: "This is a short description of Product 5.",
      image: "/images/painting.webp",
      link: "/product/painting",
    },
    {
        title: " Dresses",
        description: "This is a short description of Product 6.",
        image: "/images/gopidress.webp",
        link: "/product/dress",
      },
      {
        title: "Chandan Itar ",
        description: "This is a short description of Product 6.",
        image: "/images/allattribute.webp",
        link: "/product/allequipment",
      },
  ];

  return (
    <div className="products"style={{ backgroundColor: "#FFB733",borderRadius:"15px",marginLeft:"1rem",marginRight:"1rem" }}>
    <Container className="product-grid py-5" style={{marginTop:"2rem"}}>
      <h2 className="text-center mb-4" style={{color:"black",fontWeight:"bold",fontSize:"2.5rem"}}>Select By Category</h2>
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
                  <Card.Text className="product-card-description">
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
