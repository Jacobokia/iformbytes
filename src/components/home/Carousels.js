import React from "react";
import { Carousel } from "react-bootstrap";
import Imgs from "../../assets/image1.jpeg";

function Carousels() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img style={{ width: "100%", height: "200px" }} alt="home" src={Imgs} />
          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Come back again for better registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px" }}
            alt="Kenneth"
            src={Imgs}
          />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Your lovel Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ width: "100%", height: "200px" }}
            alt="Men"
            src={Imgs}
          />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ width: "100%", height: "200px" }} alt="carousel" src={Imgs} />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: "100%", height: "200px" }} alt="text" src={Imgs} />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: "100%", height: "200px" }} alt="good" src={Imgs} />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p>Footer Here</p>
      <p>Footer Here</p>
    </div>
  );
}

export default Carousels;
