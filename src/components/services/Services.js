import React from "react";
import { Card } from "react-bootstrap";

export default function Services() {
  const cardInfo = [
    {
      image: "https://picsum.photos/1280/520",
      title: "Title 1",
      text: "text for image 1",
    },
    {
      image: "https://picsum.photos/1280/510",
      title: "title 2",
      text: "text for image 2",
    },
    {
      image: "https://picsum.photos/1280/520",
      title: "title 3",
      text: "text for image 3",
    },
    {
      image: "https://picsum.photos/1280/520",
      title: " title 4",
      text: "text for image 4",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img style={{ width: "18rem" }} variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div className="">
      <div className="service">
        <p>Services</p>
        <p>We can serve you better</p>
      </div>

      <div className="grid">{cardInfo.map(renderCard)}</div>
    </div>
  );
}
