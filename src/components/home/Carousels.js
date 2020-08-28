import React from "react";
import { Carousel } from "react-bootstrap";
import Imgs from "../../assets/image3.jpg";
import img from "../../assets/image4.jpg";

function Carousels() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px" }}
            alt="home"
            src={Imgs}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "300px" }}
            alt="Kenneth"
            src={img}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ width: "100%", height: "300px" }} alt="Men" src={img} />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ width: "100%", height: "300px" }}
            alt="carousel"
            src={Imgs}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "300px" }}
            alt="text"
            src={Imgs}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "300px" }}
            alt="good"
            src={img}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
