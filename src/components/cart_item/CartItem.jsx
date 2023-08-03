import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.css";
import { Context } from "../../context/ThemeContext";

function CartItem({ img, title, price, id }) {
  const { changePending, pending, cartItems, addToCart, removeFromCart } =
    useContext(Context);

  const [itemValue, setItemValue] = useState(1);
  const priceAsNumber = parseFloat(price);
  const realprice = priceAsNumber * itemValue;

  // Remove from cart
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };
  //
  return (
    <div className="cart_item">
      <div className="cart_item_img">
        <img src={img} alt="" />
      </div>
      <div className="cart_item_info">
        <div className="cart_item_top">
          <div className="cart_item_title">{title}</div>
          <div className="cart_item_price">{realprice}.00$</div>
        </div>
        <div className="cart_item_bottom">
          <div className="cart_item_quantity">
            <div
              className="cart_quantity_block"
              onClick={() => {
                setItemValue(itemValue > 1 ? itemValue - 1 : itemValue);
              }}
            >
              -
            </div>
            <div className="cart_quantity_block">{itemValue}</div>
            <div
              className="cart_quantity_block"
              onClick={() => {
                setItemValue(itemValue + 1);
              }}
            >
              +
            </div>
          </div>
          <div
            className="cart_item_remove"
            onClick={() => handleRemoveFromCart(id)}
          >
            <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
