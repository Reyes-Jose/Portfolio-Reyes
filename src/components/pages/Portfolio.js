import React from "react";
import Card from "react-bootstrap/Card";
import Moodboard from "../../images/moodboard.png";
import RestReview from "../../images/restReview.jpg"


export default function Portfolio() {
  return (
    <div>
      <p>Portfolio</p>
      <Card>
        <Card.Img src={Moodboard} alt="mood board img" />
      </Card>
      <Card>
        <Card.Img src={RestReview} alt="restaurant review img" />
      </Card>
    </div>
  );
}
