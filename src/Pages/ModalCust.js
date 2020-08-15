/** @format */

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalCust({ handleShow, handleClose, show }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Added to Bucket!</Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
           OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
