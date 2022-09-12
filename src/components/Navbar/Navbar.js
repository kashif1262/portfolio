import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Kashif</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>home</li>
            <li>services</li>
            <li>Experience</li>
            <li>portfolio</li>
            <li>testimonials</li>
          </ul>
        </div>
        <button className="button n-button">contact us</button>
      </div>
    </div>
  );
}
