import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const ProductModal = (props) => {
  const { id, title, image, price } = props.productinfo;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
          <img className="w-50 m-auto" src={image} alt="" />
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
