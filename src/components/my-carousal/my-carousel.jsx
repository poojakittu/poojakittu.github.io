import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./my-carousel.style.css";
import Slide1 from "../../Assets/img/carousal/Slide1.jpg";
import Slide5 from "../../Assets/img/carousal/Slide5.png";
import Slide3 from "../../Assets/img/carousal/Slide3.jpg";
import Slide6 from "../../Assets/img/carousal/Slide6.png";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={5000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide5}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide6}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
};

export { MyCarousal };
