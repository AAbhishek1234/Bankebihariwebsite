import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Welcome = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container className="py-5">
        <Row>
          {/* Welcome Section - Always First */}
          <Col xs={12} className="order-1">
            <h2 style={{ fontWeight: "bold" }}>Welcome</h2>
            <p>
              To create a world where every bite brings joy and well-being for
              you & your family, for the farmers & for the environment.
            </p>
          </Col>

          {/* Images Section - Second in Mobile, Second in Laptop */}
          <Col xs={12} md={6} className="order-2">
            <Row className="text-center">
              <Col xs={12} md={6} className="mb-3">
                <img
                  src="/images/peda2.jpg"
                  alt="Product 1"
                  className="img-fluid"
                  style={{ borderRadius: "8px" }}
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <img
                  src="/images/tulsimala.jpg"
                  alt="Product 2"
                  className="img-fluid"
                  style={{ borderRadius: "8px" }}
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <img
                  src="/images/vastra.jpg"
                  alt="Product 3"
                  className="img-fluid"
                  style={{ borderRadius: "8px", height: "15rem" }}
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <img
                  src="/images/deco.webp"
                  alt="Product 4"
                  className="img-fluid"
                  style={{ borderRadius: "8px", height: "15rem", width: "25rem" }}
                />
              </Col>
            </Row>
          </Col>

          {/* Sewa Section - Third in Mobile, Third in Laptop */}
          <Col xs={12} className="order-3">
            <h2 style={{ fontWeight: "bold" }}>Sewa</h2>
            <p>
              At Millet Sisters, we are dedicated to revolutionizing the way you
              enjoy baked goods. Our core philosophy aims to:
            </p>
            <ul>
              <li>
                <strong>Prashad:</strong> Make baked goods that are rich in
                nutrients, gluten-free, sustainable, plant-based, and easy to
                digest, supporting a healthier lifestyle for our customers.
              </li>
              <li>
                <strong>Mala:</strong> Promote millets and the importance of
                eating right.
              </li>
              <li>
                <strong>Poshak:</strong> Continuously explore new recipes and
                baking techniques to improve our offerings.
              </li>
              <li>
                <strong>Phool Bangla:</strong> Continuously explore new recipes and
                baking techniques to improve our offerings.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
