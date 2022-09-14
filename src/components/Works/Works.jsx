import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>work for all these</span>
        <span>brands & clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
          <br />
          adipisicing elit. Dolores, numquam dignissimos. Vero.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <button className="button s-button">hire me</button>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          {/* background circle */}
          <div className="w-backcircle bluecircle"></div>
          <div className="w-backcircle yellowcircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
