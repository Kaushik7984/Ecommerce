import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material"; // Import icons from Material-UI
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2024 &copy; Ecommerce</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/kaushik-tapaniya-624142239/" target="_blank" rel="noopener noreferrer">
          <LinkedIn /> LinkedIn
        </a>
        <a href="https://github.com/Kaushik7984" target="_blank" rel="noopener noreferrer">
          <GitHub /> GitHub
        </a>
        <a href="http://instagram.com/kaushiiq_7" target="_blank" rel="noopener noreferrer">
          <Instagram /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
