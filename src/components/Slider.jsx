import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css'
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-blockx w-100"
          src="/images/sl1.jpg"
          alt="Second Slide"
          style={{ height: "40rem" }}
        />
        <Carousel.Caption>
          {/* <h3>Second Slide Label</h3>
          <p>Some description for the second slide.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-blockx w-100"
          src="/images/Slider-image3.jpeg"
          alt="Third Slide"
          style={{ height: "40rem" }}
        />
        <Carousel.Caption>
          {/* <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
