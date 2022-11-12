import React from "react";
import myImage from "../../images/IMG-555.jpg";
import { Card } from "react-bootstrap";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "80%",
        width: "100%",
      }}
    >
      <Card
        style={{
          width: "50rem",
          background: "#121212",
          alignItems: "center",
          height: "30rem",
        }}
      >
        <img
          src={myImage}
          alt=""
          style={{ width: 300, height: 300, borderRadius: 200 }}
        ></img>

        <Card.Body
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Card.Title
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            About Me
          </Card.Title>
          <Card.Text>
            Jose is an aspiring web developer who is on the pursuit of
            knowledge. Jose can help you achieve your web development needs.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
