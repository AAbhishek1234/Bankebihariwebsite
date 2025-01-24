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
      title: "Poshak",
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
      title: "Painting",
      description: "This is a short description of Product 5.",
      image: "/images/painting.webp",
      link: "/product/painting",
    },
  ];

  return (
    <Container className="product-grid py-5">
      <h2 className="text-center mb-4">Our Products</h2>
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
  );
};

export default ProductGrid;
