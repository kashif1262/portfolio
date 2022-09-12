import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloaringDiv/FloatingDiv";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span>hi! I Am</span>
          <span>Muhammad kadhif iqbal</span>
          <span>
            frontend developer with high level of experience in web designing
            and development, producting the quality work
          </span>
        </div>
        <button className="button i-button">hire me</button>
        <div className="i-icons">
          <a href="#">
            <img src={Instagram} alt="" />
          </a>
          <a href="#">
            <img src={Linkedin} alt="" />
          </a>
          <a href="#">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div className="" style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="web" txt2="developer" />

          {/* <FloatingDiv  /> */}
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="best design" txt2={"award"} />
        </div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
