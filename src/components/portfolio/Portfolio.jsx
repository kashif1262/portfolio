import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import AllEvents from "../../img/all-events.PNG";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <SwiperSlide className="flex flex-col gap-2">
          <a href="">
            <h2 className="text-center">DashBoard</h2>
          </a>
          <a href="">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-2">
          <a href="https://all-events.netlify.app/">
            <h2 className="text-center">Events Managements</h2>
          </a>
          <a href="https://all-events.netlify.app/">
            <img
              src={AllEvents}
              alt="Events Managements"
              style={{ height: "117%" }}
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
