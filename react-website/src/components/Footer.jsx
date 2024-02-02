import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




function Footer() {
  return (
    <>
      <div className="FooterContainer">
        <div className="forBusiness">
          <h5>For Business</h5>
          <p>employee</p>
          <p>health care</p>
          <p>individual</p>
        </div>
        <div className="partners">
          <h5>Partners</h5>
          <p>openAI</p>
          <p>Amazon</p>
          <p>FaceBook</p>
          <p>icogLabs</p>
          <p>ALX</p>
        </div>
        <div className="company">
          <h5>Company</h5>
          <p>SpaceX</p>
          <p>Tesla</p>
          <p>X-Corp</p>
          <p>Neuralink</p>
        </div>
        <div className="contact">
          <h5>Contact</h5>
          <div className="footerIcons">
            <div className="footerIcon">
              <FaInstagram className="icons" /> <p>Elon_Musk</p>
            </div>
            <div className="footerIcon">
              <FaGithub className="icons" /> <p>elon_E_musk</p>
            </div>
            <div className="footerIcon">
              <FaSquareXTwitter className="icons" /> <p>Elon@Musk</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="left">@2024 kuraz software</p>
        <div className="right">
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Security</p>
          <p>Cookie & Declaration</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
