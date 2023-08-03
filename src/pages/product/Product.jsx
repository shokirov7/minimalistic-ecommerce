import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { shopFirestore } from "../../firebase/config";
import { Context } from "../../context/ThemeContext";
import { NavLink, useParams } from "react-router-dom";
import More from "./more_details/More";
import Loader from "../../components/loader/Loader";
import Slider from "../../components/slider/Slider";
import ProdSkelet from "../../components/product_skelet/ProdSkelet";

function Product() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const { changePending, pending, cartItems, addToCart } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
  }, [id]);
  useEffect(() => {
    if (data) {
      setMainImage(data.img1);
    }
  }, [data]);

  const [itemValue, setItemValue] = useState(1);
  const priceAsNumber = parseFloat(data && data.price);
  const realprice = priceAsNumber * itemValue;
  const [mainImage, setMainImage] = useState(null);
  const handleAddToCart = () => {
    {
      addToCart({
        id: id,
        img: data && data.img1,
        title: data && data.title,
        price: data && priceAsNumber,
        quantity: 1,
      });
    }
  };
  return (
    <div className="product_id">
      {pending && <ProdSkelet/> }
      {data && (
        <div className="product_info_holder">
          <div className="product_details">
            <div className="prod_detail_title">{data.title}</div>
            <div className="prod_details_left">
              <div className="product_big_img">
                <img src={mainImage} alt="" />
              </div>
              <div className="product_min_imgs">
                <img
                  src={data.img1}
                  alt=""
                  onMouseEnter={() => {
                    setMainImage(data.img1);
                  }}
                />
                <img
                  src={data.img2}
                  alt=""
                  onMouseEnter={() => {
                    setMainImage(data.img2);
                  }}
                />
                <img
                  src={data.img3}
                  alt=""
                  onMouseEnter={() => {
                    setMainImage(data.img3);
                  }}
                />
              </div>
            </div>
            <div className="prod_details_right">
              <div className="prod_detail_desc">{data.desc}</div>
              <div className="prod_detail_price">
                <span>Quantity</span>
                <div className="prod_detail_quantity">
                  <div
                    onClick={() => {
                      setItemValue(itemValue > 1 ? itemValue - 1 : itemValue);
                    }}
                    className="quantity_block"
                  >
                    -
                  </div>
                  <div className="quantity_block">{itemValue}</div>
                  <div
                    onClick={() => {
                      setItemValue(itemValue + 1);
                    }}
                    className="quantity_block"
                  >
                    +
                  </div>
                </div>
                <span>{realprice}.00$</span>
              </div>
              <div className="prod_detail_btns">
                <button onClick={handleAddToCart}>add to cart</button>
                <button>buy now</button>
              </div>
            </div>
          </div>
          <More texture={data.texture} weight={data.weight} size={data.size} />
          <Slider />
        </div>
      )}
    </div>
  );
}

export default Product;
