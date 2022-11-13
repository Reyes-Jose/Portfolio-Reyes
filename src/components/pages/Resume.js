import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BsDownload } from "react-icons/bs";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  height: "80%",
  width: "100%",
};

export default function Resume() {
  return (
    <div style={container}>
      <CardGroup style={{ width: "50rem", gap: "3rem" }}>
        <Card style={{ background: "#121212" }}>
          <Card.Body>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Front End:
            </Card.Title>
            <Card.Text>
              <li>Html</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Jquery</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ background: "#121212" }}>
          <Card.Body>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Back End:
            </Card.Title>
            <Card.Text>
              <li>Express</li>
              <li>Node</li>
              <li>mySQL</li>
              <li>noSQL(mongoDB, Mongoose)</li>
              <li>Object Relational Mapping(ORM)</li>
              <li>Model View Controller(MVC)</li>
              <li>Progressive Web Applications(PWA)</li>
              <li>GraphQL</li>
              <li>API's</li>
            </Card.Text>
          </Card.Body>
        </Card>

        <BsDownload
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            height: "90%",
          }}
          size={20}
        ></BsDownload>
      </CardGroup>
    </div>
  );
}
