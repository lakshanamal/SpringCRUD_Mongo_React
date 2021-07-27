import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Edit({ idName }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(idName);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [role, setRole] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    getUser();
    setShow(true);
  };

  const getUser = () => {
    axios.get(`http://localhost:8080/api/user/${id}`).then((res) => {
      setName(res.data.name);
      setAge(res.data.age);
      setPhone(res.data.phone);
      setDob(res.data.dob);
      setRole(res.data.role);
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Math.random,
      name: name,
      age: age,
      phone: phone,
      dob: dob,
      role: role,
    };
    console.log(user);
    axios.post("http://localhost:8080/api/user", user);
    window.location.href = "/";
  };

  return (
    <>
      <Button className="" variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Form className="p-4" onSubmit={onsubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dob">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Control
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
