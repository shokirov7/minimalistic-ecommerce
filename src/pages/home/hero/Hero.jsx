import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <Link to="/categories/furnitures" className="hero_block">
        <h2 className="hero_block_title">Live Comfortably</h2>
      </Link>
      <Link to="/categories/skin-care" className="hero_block">
        <h2 className="hero_block_title">HW Skincare</h2>
      </Link>
      <Link to="/categories/kitchen" className="hero_block">
        <h2 className="hero_block_title">Kitchen</h2>
      </Link>
      <Link to="/categories/electronics" className="hero_block">
        <h2 className="hero_block_title">Electronics</h2>
      </Link>
    </div>
  );
}

export default Hero;

{
  /* <Link to="/categories/furnitures" className="hero_left_block hero_left_block1 hero_block">
        <div className="hero_block_title">Live Comfortably</div>
      </Link>
      <Link to="/categories/skin-care" className="hero_left_block hero_left_block2 hero_block">
        <div className="hero_block_title">Skincare</div>
      </Link>

      <div className="hero_right">
        <Link to="/categories/kitchen" className="hero_right_block hero_right_block1 hero_block">
          <div className="hero_block_title">Kitchen</div>
        </Link>
        <Link to="/categories/electronics" className="hero_right_block hero_right_block2 hero_block">
          <div className="hero_block_title">Electronics</div>
        </Link>
      </div> */
}
