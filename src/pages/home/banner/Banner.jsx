import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import banner from "../../../assets/img/banner.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <div className="banner_left">
          <div className="banner_left_title">Creative harmonious living</div>
          <div className="banner_left_desc">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </div>
          <div className="banner_left_btn">
            <Link to="/categories/all">shop now</Link>
          </div>
        </div>
        <div className="banner_right">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
