import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./ReactNavbar.css";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../../../images/logo.png";

const ReactNavbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  // Function to toggle the navbar visibility
  const menuToggleHandler = () => {
    setMenuToggle((prev) => !prev);  // Toggle between true and false
  };

  // Function to close the navbar when a link or icon is clicked
  const closeBarOnClick = () => {
    setMenuToggle(false);  // Close the navbar
  };

  return (
    <Fragment>
      {/* Overlay that disables background interaction when the navbar is open */}
      {menuToggle && <div className="overlay" onClick={closeBarOnClick}></div>}

      {/* Hamburger menu button */}
      <div className="menuBurger" onClick={menuToggleHandler}>
        <div className={`menuBurgerItem menuBurgerItem1 ${menuToggle ? "active" : ""}`} />
        <div className={`menuBurgerItem menuBurgerItem2 ${menuToggle ? "active" : ""}`} />
        <div className={`menuBurgerItem menuBurgerItem3 ${menuToggle ? "active" : ""}`} />
      </div>

      <nav className={`navbar ${menuToggle ? 'active' : 'inactive'}`}>
        <div className="navbarCenter">
          <div className="logoReactNavbar">
            <img src={logo} alt="Logo" />
          </div>

          <div className="navLinks">
            <Link className="link" to="/" onClick={closeBarOnClick}>Home</Link>
            <Link className="link" to="/products" onClick={closeBarOnClick}>Products</Link>
            <Link className="link" to="/about" onClick={closeBarOnClick}>About Us</Link>
            <Link className="link" to="/contact" onClick={closeBarOnClick}>Contact Us</Link>
          </div>

          <div className="navIcons">
            <Link to="/search" onClick={closeBarOnClick}><FaSearch /></Link>
            <Link to="/cart" onClick={closeBarOnClick}><FaShoppingCart /></Link>
            <Link to="/account" onClick={closeBarOnClick}><FaUser /></Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default ReactNavbar;
