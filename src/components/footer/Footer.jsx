import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_title">Newsletter</div>
        <form action="" className="footer_form">
          <input type="text" placeholder="your@email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer_bottom">
        <div className="footer_links">
          <NavLink>About</NavLink>
          <NavLink>Store locator</NavLink>
          <NavLink>FAQs</NavLink>
          <NavLink>News</NavLink>
          <NavLink>Careers</NavLink>
          <NavLink>Contact Us</NavLink>
        </div>
        <div className="footer_copyright">Recreated by Shokirov Amirxon</div>
      </div>
    </div>
  );
}

export default Footer;
