import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
export default function Contact() {
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
          width: "30rem",
          background: "#121212",
          alignItems: "center",
          height: "25rem",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputGroup className="mb-3">
            <Form.Control placeholder="Full Name" />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="Type your message here..."
            />
          </InputGroup>
          <Button variant="primary" size="lg">
            Submit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
