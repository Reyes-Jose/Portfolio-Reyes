import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';




export default function Contact(){

    return(
        <div className="container" >
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Full Name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
        />
      </InputGroup>
      <InputGroup>
        <Form.Control as="textarea" aria-label="With textarea"  placeholder="Type your message here..."/>
      </InputGroup>
      <Button variant="primary" size="lg">
        Submit
      </Button>
        </div>
    )
}






