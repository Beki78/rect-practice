import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function Home() {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <h4 style={{ fontFamily: "areal" }}>Hi there</h4>
        <h1 style={{ fontFamily: "areal" }}>
          I am{" "}
          <span style={{ fontFamily: "monospace", color: "yellow" }}>
            Elon Musk
          </span>
        </h1>
        <h2 style={{ fontFamily: "areal" }}>
          I am founder, chairman, CEO of{" "}
          <span style={{ fontFamily: "monospace", color: "yellow" }}>
            SpaceX,Tesla, X-Corp
          </span>{" "}
          and co-founder of{" "}
          <span style={{ fontFamily: "monospace", color: "yellow" }}>
            Neuralink
          </span>{" "}
          .
        </h2>
        <div className="homeIcons">
          <FaInstagram className="icons" />
          <FaGithub className="icons" />
          <FaSquareXTwitter className="icons" />
        </div>
        <button>Contact me</button>
      </div>
      <div className="homeRightSide"></div>
    </div>
  );
}

export default Home;
