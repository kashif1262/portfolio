import React from "react";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import "./Services.css";
import Card from "../Card/Card.jsx";
const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span style={{}}>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Iure omnis delectus exercitationem quo culpa iste.
        </spane>
        <button className="button s-button">download cv</button>
        <div className="blur s-blur1"></div>
      </div>
      {/* right site */}
      <div className="cards">
        <div style={{ left: "20rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"figma, sketch, photoshop, adobe xd"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"developer"}
            detail={"HTML CSS Javascript React"}
          />
        </div>
        <div style={{ top: "19rem", left: "14rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet consectetur."}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
