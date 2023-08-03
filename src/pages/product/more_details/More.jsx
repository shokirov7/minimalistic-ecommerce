import React from "react";
import "./More.css";

function More({ texture, weight, size }) {
  return (
    <div className="prod_more_grid">
      <div className="prod_more">
        <div className="prod_more_title">Texture:</div>
        <div className="prod_more_desc">{texture}</div>
      </div>
      <div className="prod_more">
        <div className="prod_more_title">Weight:</div>
        <div className="prod_more_desc">{weight}</div>
      </div>
      <div className="prod_more">
        <div className="prod_more_title">Size:</div>
        <div className="prod_more_desc">{size}</div>
      </div>
    </div>
  );
}

export default More;
