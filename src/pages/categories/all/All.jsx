import React, { useContext, useEffect, useState } from "react";
import "./All.css";
import { Context } from "../../../context/ThemeContext";
import { shopFirestore } from "../../../firebase/config";
import CatTop from "../../../components/categories_top/CatTop";
import Loader from "../../../components/loader/Loader";
import PrCard from "../../../components/proudcard/PrCard";
import ProudSkelet from "../../../components/skeleton_proud/ProudSkelet";

function All() {
  const [data, setData] = useState(null);
  const [alo, setAlo] = useState(true);
  const { changePending, pending } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    setTimeout(() => {
      setAlo(false);
    }, 1);
  }, []);
  return (
    <div className="categ_all">
      <CatTop title={"All"} />
      <div className="categ_all_holder">
        {pending && <ProudSkelet />}
        {alo && <Loader />}
        {!pending &&
          data &&
          data
            .sort((a, b) => a.id - b.id)
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

export default All;
