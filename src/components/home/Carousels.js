import React from "react";
import { Carousel } from "react-bootstrap";
import Imgs from "../../assets/image3.jpg";
import img from "../../assets/image4.jpg"

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
            style={{ width: "100%", height: "300px" }}
            alt="Kenneth"
            src={img}
          />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Your lovel Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ width: "100%", height: "300px" }}
            alt="Men"
            src={img}
          />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ width: "100%", height: "300px" }} alt="carousel" src={Imgs} />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: "100%", height: "300px" }} alt="text" src={Imgs} />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ width: "100%", height: "300px" }} alt="good" src={img} />

          <Carousel.Caption>
            <h3>IformByte</h3>
            <p>Registration websites.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
}

export default Carousels;
