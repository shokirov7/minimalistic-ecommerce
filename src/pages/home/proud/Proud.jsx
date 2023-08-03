import React, { useContext, useEffect, useState } from "react";
import "./Proud.css";
import Title from "../../../components/title/Title";
import { Context } from "../../../context/ThemeContext";
import PrCard from "../../../components/proudcard/PrCard";
import { shopFirestore } from "../../../firebase/config";

function Proud() {
  const [data, setData] = useState(null);
  const { changePending, pending } = useContext(Context);

  useEffect(() => {
    changePending(true);
    shopFirestore.collection("minimalistic-shop").onSnapshot((data) => {
      if (!data.empty) {
        var result = [];
        data.forEach((item) => {
          result.push({ ...item.data(), id: item.id });
        });
        setData(result);
        changePending(false);
      } else {
        setData([]);
        changePending(false);
      }
    });
  }, []);

  return (
    <div className="proud_section">
      <Title title={"Products we are proud of"} />
      <div className="proud_grid">
        {!pending &&
          data &&
          data
            .sort((a, b) => a.id - b.id)
            .slice(0, 8)
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

export default Proud;
