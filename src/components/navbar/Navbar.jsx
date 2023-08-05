import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/ThemeContext";
import CartItem from "../cart_item/CartItem";
import { shopFirestore } from "../../firebase/config";
import logo from '../../assets/img/logo.png'
import Cart from "../cart/Cart";

function Navbar() {
  const { id } = useParams();
  const [isCartOpened, setIsCartOpened] = useState(false);
  const { changePending, pending, cartItems, addToCart, removeFromCart } =
    useContext(Context);
  const countCart = cartItems.length;
  // total price
  const priceAsNumber = parseFloat(cartItems && cartItems.price);
  const totalSum = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  //
  const [data, setData] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    changePending(true);
    shopFirestore
      .collection("minimalistic-shop")
      .doc(id)
      .get()
      .then((item) => {
        setData(item.data());
        changePending(false);
      });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar">
      <div className={isSticky ? "nav_content sticky" : "nav_content"}>
        <div className="nav_logo" onClick={scrollToTop}>
          <NavLink to="/">
            <img
              src={logo}
              alt=""
            />
          </NavLink>
        </div>
        <div className="nav_right">
          <div className="nav_right_right">
            <NavLink to="/categories/all">categories</NavLink>
            <NavLink to="/categories/product/19">product page</NavLink>
          </div>
          <div
            className="nav_cart"
            onClick={() => {
              setIsCartOpened(true);
            }}
          >
            {countCart > 0 && (
              <div
                onClick={() => {
                  setIsCartOpened(true);
                }}
                className="cart_item_number"
              >
                {countCart}
              </div>
            )}
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#000000" }}
            />
          </div>
          <div
            className="nav_mini_menu_btn"
            onClick={() => {
              setIsMenu(true);
            }}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
          </div>
        </div>
        <Cart isCartOpened={isCartOpened} setIsCartOpened={setIsCartOpened} />

        <div className={isMenu ? "nav_mini_menu active" : "nav_mini_menu"}>
          <div
            className="nav_mini_menu_close"
            onClick={() => {
              setIsMenu(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} />
          </div>

          <div
            onClick={() => {
              setIsMenu(false);
            }}
            className="mini_menu_link"
          >
            <NavLink to="/categories/all">categories</NavLink>
          </div>
          <div
            onClick={() => {
              setIsMenu(false);
            }}
            className="mini_menu_link"
          >
            <NavLink to="/categories/lamps">lamps</NavLink>
          </div>
          <div
            onClick={() => {
              setIsMenu(false);
            }}
            className="mini_menu_link"
          >
            <NavLink to="/categories/product/19">product page</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
