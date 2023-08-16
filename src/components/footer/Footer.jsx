import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
          <NavLink onClick={handleNavLinkClick} to="">About</NavLink>
          <NavLink onClick={handleNavLinkClick} to="">Store locator</NavLink>
          <NavLink onClick={handleNavLinkClick} to="">FAQs</NavLink>
          <NavLink onClick={handleNavLinkClick} to="">News</NavLink>
          <NavLink onClick={handleNavLinkClick} to="">Careers</NavLink>
          <NavLink onClick={handleNavLinkClick} to="">Contact Us</NavLink>
        </div>
        <div className="footer_copyright">Recreated by Shokirov Amirxon</div>
      </div>
    </div>
  );
}

export default Footer;
