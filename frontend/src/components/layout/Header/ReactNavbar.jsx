import { useState,    } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Person } from "@mui/icons-material";
import "./ReactNavbar.css";
import logo from "../../../images/logo.png";

const ReactNavbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const menuToggleHandler = () => {
    setMenuToggle((prev) => !prev);
  };

  const closeBarOnClick = () => {
    setMenuToggle(false); // Close the navbar
  };

  return (
   <>
      {menuToggle && <div className="overlay" onClick={closeBarOnClick}></div>}

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
            <Link to="/search" onClick={closeBarOnClick}><Search /></Link>
            <Link to="/cart" onClick={closeBarOnClick}><ShoppingCart /></Link>
            <Link to="/account" onClick={closeBarOnClick}><Person /></Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ReactNavbar;
