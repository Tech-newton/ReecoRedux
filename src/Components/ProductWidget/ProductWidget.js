import React, { useMemo, useRef, useState } from "react";

import "./ProductWidget.css";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  setApproved,
  setMissing,
  updatePrice,
  updateQuantity,
  updateTotal,
} from "../../Redux/Features/ProductOperation/ProductSlice";
import MissingModdel from "../../Modals/MissingModdel";
import EditModal from "../../Modals/EditModal/EditModal";

import Avocado from "../../imgs/Avocado.jpg";

const ProductWidget = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const statusClassMap = useMemo(
    () => ({
      "Missing-Urgent": "missingUrgent",
      Missing: "missing",
      Approved: "approved",
    }),
    []
  );

  const missingButtonsClassMap = useMemo(
    () => ({
      "Missing-Urgent": "missingUrgentBtn",
      Missing: "missingBtn",
    }),
    []
  );

  const productName = useRef("");
  const productIdForRedux = useRef("");

  const [showMissingPopup, setShowMissingPopup] = useState(false);
  const [showEditPopup, setshowEditPopup] = useState(false);

  const handleMissingPopupClose = (status) => {
    if (status === "yes") {
      dispatch(
        setMissing({
          missingStatus: "Missing-Urgent",
          productId: productIdForRedux.current,
        })
      );
    } else if (status === "no") {
      dispatch(
        setMissing({
          missingStatus: "Missing",
          productId: productIdForRedux.current,
        })
      );
    }
    productIdForRedux.current = "";
    productName.current = "";
    setShowMissingPopup(false);
  };

  const handleMissingPopupShow = (producName, id) => {
    productIdForRedux.current = id;
    productName.current = producName;
    setShowMissingPopup((prevState) => !prevState);
  };

  const handleEditPopupShow = (producName, id) => {
    productIdForRedux.current = id;
    productName.current = producName;
    setshowEditPopup((prevState) => !prevState);
  };

  const handleEditPopupClose = (send, price, quantity) => {
    if (send == "yes") {
      if (price > 0 && quantity > 0) {
        dispatch(
          updateTotal({
            newTotal: price * quantity,
            productId: productIdForRedux.current,
          })
        );
      } else if (price > 0) {
        dispatch(
          updatePrice({ newPrice: price, productId: productIdForRedux.current })
        );
      } else {
        dispatch(
          updateQuantity({
            newQuantity: quantity,
            productId: productIdForRedux.current,
          })
        );
      }
    }
    setshowEditPopup((prevState) => !prevState);
  };

  const updateStatusGreen = (text, id) => {
    if (text === "approved") {
      dispatch(setApproved({ productId: id }));
    }
  };

  return (
    <div className="productTable">
      <div className="tableTop commonStyle">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <div className="search-icon">&#128269;</div>
        </div>
        <div className="actionButtons">
          <button className="backButton">Add Item</button>
          <FontAwesomeIcon icon={faPrint} />
        </div>
      </div>
      <div className="table-container commonStyle">
        <table>
          <thead>
            <tr>
              <th className="pics"></th>
              <th className="product-name">Product Name</th>
              <th className="brand">Brand</th>
              <th className="price">Price</th>
              <th className="quantity">Quantity</th>
              <th className="total">Total</th>
              <th className="status">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td className="pics">
                  <img src={Avocado} alt="Product image" className="imgClass" />
                </td>
                <td className="product-name">{product.productName}</td>
                <td className="brand">{product.brand}</td>
                <td className="price">{product.price}</td>
                <td className="quantity">{product.quantity}</td>
                <td className="total">{product.total}</td>
                <td className="status">
                  <div className="statusDiv">
                    <div className="statusText">
                      <p
                        className={`commonStatus ${
                          statusClassMap[product.cssStatus] || "defaultStatus"
                        }`}
                      >
                        {product.status}
                      </p>
                    </div>
                    <div className="buttonGroup">
                      <FontAwesomeIcon
                        icon={faCheck}
                        onClick={() =>
                          updateStatusGreen("approved", product.id)
                        }
                        className={
                          product.cssStatus == "Approved"
                            ? "approvedBtn"
                            : "icon"
                        }
                      />
                      <FontAwesomeIcon
                        className={` icon ${
                          missingButtonsClassMap[product.cssStatus]
                        }`}
                        onClick={() =>
                          handleMissingPopupShow(
                            product.productName,
                            product.id
                          )
                        }
                        icon={faXmark}
                      />
                      <button
                        className="editButton"
                        onClick={() =>
                          handleEditPopupShow(product.productName, product.id)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tableBody"></div>

      <MissingModdel
        showMissingPopup={showMissingPopup}
        handleMissingPopupClose={handleMissingPopupClose}
        productName={productName.current}
      />

      <EditModal
        productName={productName.current}
        showEditPopup={showEditPopup}
        handleEditPopupClose={handleEditPopupClose}
      />
    </div>
  );
};

export default ProductWidget;
