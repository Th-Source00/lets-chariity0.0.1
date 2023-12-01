import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./vCarousel.css"; 
import secondCarousel01 from "../../Assets/img/secondCarousel01.jpg"
import secondCarousel02 from "../../Assets/img/secondCarousel02.jpg"
import secondCarousel03 from "../../Assets/img/secondCarousel03.jpg"
import secondCarousel04 from "../../Assets/img/secondCarousel04.jpg"

const VerticalCarousel = () => {
  return (
    <div>
    <Carousel className="vertical-slider-carousel">
      <Carousel.Item>
        <img
          className="img-fluid img-thumbnail"
          src={secondCarousel01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid img-thumbnail"
          src={secondCarousel02}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid img-thumbnail"
          src={secondCarousel03}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" img-fluid img-thumbnail"
          
          src={secondCarousel04}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default VerticalCarousel;

