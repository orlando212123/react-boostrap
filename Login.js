import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useState} from 'react'; 
export default function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
            <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick={handleClose}>Save changes</Button>
  </Modal.Footer>
</Modal>
        </div>
    )
}
