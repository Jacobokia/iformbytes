import React from "react";
import { Card } from "react-bootstrap";

export default function Services() {
  const cardInfo = [
    {
      // image: "https://picsum.photos/1280/520",
      number: 1,
      title: "01",
      text:
        "I enjoy taking on challenges and engaging with the resources around me and the provision of solutions and sharing with my teammates",
    },
    {
      // image: "https://picsum.photos/1280/510",
      number: 2,
      title: "02",
      text:
        "I enjoy taking on challenges and engaging with the resources around me and the provision of solutions and sharing with my teammates",
    },
    {
      // image: "https://picsum.photos/1280/520",
      number: 3,
      title: "03",
      text:
        "I enjoy taking on challenges and engaging with the resources around me and the provision of solutions and sharing with my teammates",
    },
    {
      // image: "https://picsum.photos/1280/520",
      number: 4,
      title: "04",
      text:
        "I enjoy taking on challenges and engaging with the resources around me and the provision of solutions and sharing with my teammates",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card
        style={{ width: "18rem", marginTop: "7%" }}
        key={index}
        className="box"
      >
        {/* <Card.Img style={{ width: "18rem" }} variant="top" src={card.image} /> */}

        <Card style={{ width: "18rem" }} key={index} className="box" />
        <Card src={card.number} />

        <Card.Body>
          <p style={{ textAlign: "center" }}>Why Choose Us</p>
          <Card.Title style={{ textAlign: "center" }}>{card.title}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div style={{ flexDirection: "row" }}>
      <div className="service">
        <p>Services</p>
        <p>We can serve you better</p>
      </div>

      <div className="grid">{cardInfo.map(renderCard)}</div>
    </div>
  );
}
