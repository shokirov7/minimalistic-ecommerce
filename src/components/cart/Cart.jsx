import React, { useContext, useEffect, useState } from "react";
import CartItem from "../cart_item/CartItem";
import { Context } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cart from "../../assets/img/cart.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

function Cart({ isCartOpened, setIsCartOpened }) {
  const { changePending, pending, cartItems, addToCart, removeFromCart } =
    useContext(Context);
  const countCart = cartItems.length;
  // total price
  const priceAsNumber = parseFloat(cartItems && cartItems.price);
  const totalSum = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  const handleCloseCart = (event) => {
    if (event.target.classList.contains("cart_body")) {
      setIsCartOpened(false);
    }
  };
  return (
    <div
      onClick={handleCloseCart}
      className={isCartOpened ? "cart_body active" : "cart_body"}
    >
      <div className={`cart_holder ${isCartOpened ? "active" : ""}`}>
        <div className="cart_top">
          <div className="cart_top_title">Your Shopping Cart ({countCart})</div>
          <div
            className="cart_top_close"
            onClick={() => {
              setIsCartOpened(!isCartOpened);
            }}
          >
            <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} />
          </div>
        </div>
        {countCart > 0 ? (
          <div className="cart_items_holder">
            {cartItems.map((item, i) => {
              return (
                <CartItem
                  key={i}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                />
              );
            })}
          </div>
        ) : (
          <div className="empty_cart">
            <img src={cart} alt="" />
            <div className="empty_cart_title">Your cart is empty</div>
            <div className="empty_cart_btn">
              <button
                onClick={() => {
                  setIsCartOpened(false);
                }}
              >
                Keep Browsing
              </button>
            </div>
          </div>
        )}
        <div className="cart_total">
          <div className="cart_total_title">Subtotal</div>
          <div className="cart_total_bottom">
            <div className="cart_total_price">{totalSum}.00$</div>
            <div className="cart_total_btn">
              <button>Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
