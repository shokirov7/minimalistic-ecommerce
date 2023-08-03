import React from "react";
import { IoIosArrowBack } from 'react-icons/io'
import "./CatTop.css";
import { Link } from "react-router-dom";
import Nav from "../navigation/Nav";

function CatTop({title}) {
  return (
    <div className="all_top">
      <div className="all_title">
        <Link to="/" className="back_nav">
          <IoIosArrowBack />
          <p>Home</p>
        </Link>
        {title}
      </div>
      <Nav/>
    </div>
  );
}

export default CatTop;
