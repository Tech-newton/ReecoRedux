import React from "react";
import "./ProductInfo.css";

const ProductInfo = () => {
  return (
    <div className="productInfos">
      <div className="infoBox">
        <p>Supplier</p>
        <h5>East Cost Fruits</h5>
      </div>
      <div className="infoBox">
        <p>Shipping Date</p>
        <h5>thu, Feb 10</h5>
      </div>
      <div className="infoBox">
        <p>Total</p>
        <h5>$ 12,123</h5>
      </div>
      <div className="infoBox">
        <p>Category</p>
        <h5></h5>
      </div>
      <div className="infoBox">
        <p>Department</p>
        <h5>300-12-1223</h5>
      </div>
      <div className="infoBox">
        <p>Status</p>
        <h5>Awaiting for Approval</h5>
      </div>
    </div>
  );
};

export default ProductInfo;
