import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Avocado from "../../imgs/Avocado.jpg";
import "./EditModal.css";

function EditModal({ showEditPopup, handleEditPopupClose, productName }) {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal((prevTotal) => price * quantity);
  }, [price, quantity]);

  return (
    <Modal
      show={showEditPopup}
      size="lg"
      onHide={() => handleEditPopupClose("no")}
      aria-labelledby="Pop up where u can edit"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{productName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="image-wrapper">
            <img src={Avocado} alt="Product image" className="productImg" />
          </div>
          <div className="info-wrapper">
            <form>
              <div className="priceField commonWrapper">
                <label htmlFor="price">Price ($):</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min={0}
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
              <div className="quantityField commonWrapper">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min={0}
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
              </div>
              <div className="totalField commonWrapper">
                <label htmlFor="total">Total:</label>
                <input
                  type="number"
                  id="total"
                  name="total"
                  disabled={true}
                  value={total}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-secondary border-0"
          style={{ backgroundColor: "transparent", color: "#000" }}
          onClick={() => handleEditPopupClose("no")}
        >
          Cancel
        </Button>
        <button
          className={
            quantity > 0 || price > 0 ? "sendButton" : "sendButtondisabled"
          }
          onClick={() => handleEditPopupClose("yes", price, quantity)}
          disabled={quantity > 0 || price > 0 ? false : true}
        >
          Send
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
