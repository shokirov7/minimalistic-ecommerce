import React from "react";
import './ProdSkelet.css'

function ProdSkelet() {
  return (
    <div className="container">
      <div className="skeleton"></div>
      <div className="info">
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
      </div>
    </div>
  );
}

export default ProdSkelet;
