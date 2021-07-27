import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className=" mt-2 w-100 "
        style={{ textAlign: "left", paddingLeft: 20 }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add new user
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Form className="p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
