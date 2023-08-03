import React from "react";
import "./Banner2.css";
import { Link } from "react-router-dom";
import banner2 from "../../../assets/img/banner2.png";

function Banner2() {
  return (
    <div className="banner2">
      <div className="banner2_content">
        <div className="banner2_left">
          <img src={banner2} alt="" />
        </div>
        <div className="banner2_right">
          <div className="banner2_right_title">
            Comfortable & Elegante Living
          </div>
          <div className="banner2_right_desc">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </div>
          <div className="banner2_right_btn">
            <Link to="/categories/all">shop now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
