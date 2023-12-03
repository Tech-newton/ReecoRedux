import React from "react";
import ProductInfo from "../InfoWidget/ProductInfo";
import "./MainBody.css";
import ProductWidget from "../ProductWidget/ProductWidget";

function MainBody() {
  return (
    <div className="mainBody">
      <ProductInfo />
      <ProductWidget />
    </div>
  );
}

export default MainBody;
