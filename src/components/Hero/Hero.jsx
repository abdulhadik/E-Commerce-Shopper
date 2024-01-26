import React from "react";
import "./Hero.css";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={handIcon} alt="hand-icon" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-button">
        <div>latest collection</div>
        <img src={arrowIcon} alt="aroowicon" />
        </div>
      </div>
      <div className="hero-right">
      <img src={heroImage} alt="HeroImage" />
      
    </div>
    </div>
  );
};

export default Hero;
