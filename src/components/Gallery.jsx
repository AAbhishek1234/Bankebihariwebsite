import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
 import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: '/images/gallery1.jpg', title: 'Hariyali Teej' },
    { src: '/images/gallery2.jpg', title: 'Daily' },
    { src: '/images/g4.jpg', title: 'Phool Bangla' },
    { src: '/images/gall3.jpg', title: 'Image 4' },
    { src: '/images/g5.jpg', title: 'Holi Utsav' },
    { src: '/images/g6.jpg', title: 'Image 6' },
  ];

  return (
    <div className="gallery-container">
      <Container className="mt-4">
        {/* Centered Heading */}
        <h1 className="gallery-heading">
          Gallery
        </h1>

        <Row className="g-4">
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={image.src}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-img"
                />
                <Card.Body className="text-center">
                  <Card.Title className="gallery-title">{image.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
