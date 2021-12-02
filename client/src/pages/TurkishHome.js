import React from "react";
import "../styles/Home.scss";
import Hero from "../components/Hero";

import TurkishAbout from "./TurkishAbout";
import TurkishMission from "./TurkishMission";
const TurkishHome = () => {
  return (
    <div className="home">
      <Hero
        subtitle="Aromatik Reçineler ve Egzotik Tütsü Yeniden Tanıtılıyor"
        btn="keşfetmek"
      />
      <TurkishMission />
      <TurkishAbout />
    </div>
  );
};

export default TurkishHome;
