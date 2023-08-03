import React from "react";
import './PrCard.css'
import { Link } from "react-router-dom";

function PrCard({ title, img, price, id }) {

  return (
    <Link to={`/categories/product/${id}`} className="proud_card">
      <div className="proud_card_img">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="proud_card_text">
        <div className="proud_card_title">{title}</div>
        <div className="proud_card_price">{price}$</div>
      </div>
    </Link>
  );
}

export default PrCard;
