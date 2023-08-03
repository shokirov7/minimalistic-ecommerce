import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/ThemeContext";
import { shopFirestore } from "../../../firebase/config";
import CatTop from "../../../components/categories_top/CatTop";
import Loader from "../../../components/loader/Loader";
import PrCard from "../../../components/proudcard/PrCard";
import ProudSkelet from "../../../components/skeleton_proud/ProudSkelet";

function Lamps() {
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
      <CatTop title={"Lamps"} />
      <div className="categ_all_holder">
        {pending && <ProudSkelet />}
        {alo && <Loader />}
        {!pending &&
          data &&
          data.map((item) => {
            return (
              item.type === "lamp" && (
                <PrCard
                  key={item.id}
                  img={item.img1}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                />
              )
            );
          })}
      </div>
    </div>
  );
}

export default Lamps;
