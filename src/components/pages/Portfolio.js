import React from "react";
import Moodboard from "../../images/moodboard.png";
import RestReview from "../../images/RestReview.jpg";
import WorkDayScheduler from "../../images/workdayscheduler.jpg"
import CardGroup from 'react-bootstrap/CardGroup'
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

export default function Portfolio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      height: "80%",
      width: "100%",
    }}>
    <CardGroup style={{ width: "60rem", gap: "2rem"}}>
      <Card style={{ background: "#121212" }}>
        <Card.Body >
          <Card.Img variant="top" src={Moodboard} />
          <Card.Title style={{ display: "flex", justifyContent: "center" }}>
            The Mood Board
          </Card.Title>
          <Card.Text
            style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
          >
            <a href="https://github.com/Reyes-Jose/The-Mood-Board">
              <BsGithub size={50} style={{ color: "white" }} />
            </a>
            <a href="https://reyes-jose.github.io/The-Mood-Board/">
              <BsGlobe size={50} style={{ color: "white" }} />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ background: "#121212" }}>
        <Card.Body >
          <Card.Img variant="top" src={RestReview} />
          <Card.Title style={{ display: "flex", justifyContent: "center" }}>
            Restaurant Review
          </Card.Title>
          <Card.Text
            style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
          >
            <a href="https://github.com/Reyes-Jose/project-2">
              <BsGithub size={50} style={{ color: "white" }} />
            </a>
            <a href="https://restreviews-app.herokuapp.com/">
              <BsGlobe size={50} style={{ color: "white" }} />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ background: "#121212" }}>
        <Card.Body >
          <Card.Img variant="top" src={WorkDayScheduler} />
          <Card.Title style={{ display: "flex", justifyContent: "center" }}>
            Work Day Scheduler 
          </Card.Title>
          <Card.Text
            style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
          >
            <a href="https://github.com/Reyes-Jose/Work-Day-Scheduler">
              <BsGithub size={50} style={{ color: "white" }} />
            </a>
            <a href="https://reyes-jose.github.io/Work-Day-Scheduler/">
              <BsGlobe size={50} style={{ color: "white" }} />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}
