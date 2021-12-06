import React from "react";
import "../styles/Hero.scss";
import Button from "./Button";
import { Link } from "react-router-dom";
const Hero = ({ subtitle, btn }) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Suad silkroad</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className="hero__btn">
          <Link to="/" className="hero__links">
            <Button text="English" />
          </Link>
          <Link to="/turkish" className="hero__links">
            <Button text="Turkish" />
          </Link>
        </div>
      </div>
      <div className="hero__button">
        <div className="hero__button-text">{btn}</div>
      </div>
    </div>
  );
};

export default Hero;
