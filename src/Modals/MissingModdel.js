import React from "react";
import { Button, Modal } from "react-bootstrap";

function MissingModdel({
  showMissingPopup,
  handleMissingPopupClose,
  productName,
}) {
  if (productName.length > 35) {
    productName = productName.slice(0, 35);
    productName += "...";
  }

  return (
    <Modal
      show={showMissingPopup}
      onHide={() => handleMissingPopupClose()}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Missing Products</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`${productName} urgent?`}</Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-secondary border-0"
          style={{ backgroundColor: "transparent", color: "#000" }}
          onClick={() => handleMissingPopupClose("no")}
        >
          No
        </Button>
        <Button
          className="btn btn-secondary border-0"
          style={{ backgroundColor: "transparent", color: "#000" }}
          variant="primary"
          onClick={() => handleMissingPopupClose("yes")}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MissingModdel;
