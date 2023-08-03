import React, { useContext, useEffect, useRef, useState } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/ThemeContext";
import { shopFirestore } from "../../firebase/config";
import PrCard from "../proudcard/PrCard";
import Title from "../title/Title";

function Slider() {
  const [data, setData] = useState(null);
  const { changePending, pending } = useContext(Context);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -236,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 236,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    changePending(true);
    const unsubscribe = shopFirestore
      .collection("minimalistic-shop")
      .onSnapshot((snapshot) => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.forEach((doc) => {
            result.push({ ...doc.data(), id: doc.id });
          });
          setData(result);
          changePending(false);
        } else {
          setData([]);
          changePending(false);
        }
      });

    return () => unsubscribe();
  }, []);
  return (
    <div className="slider">
      <div className="slider_top">
        <Title title="Trending Now" />
        <div className="slider_buttons">
          <button onClick={scrollLeft}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} />
          </button>
          <button onClick={scrollRight}>
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
      <div className="slider_grid" ref={sliderRef}>
        {!pending &&
          data &&
          data
            .sort((a, b) => a.id - b.id)
            .slice(7, 20)
            .map((item) => {
              return (
                <PrCard
                  key={item.id}
                  img={item.img1}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Slider;
