import React from "react";
import "../styles/Hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Suad silkroad</h1>
        <p className="hero__subtitle">
          Re-introducing Aromatic resins and exotic incense{" "}
        </p>
      </div>
      <div className="hero__button">
        <div className="hero__button-text">Explore</div>
      </div>
    </div>
  );
};

export default Hero;
