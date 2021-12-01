import React from "react";
import "../styles/Home.scss";
import Hero from "../components/Hero";
const TurkishHome = () => {
  return (
    <div className="home">
      <Hero
        subtitle="Aromatik Reçineler ve Egzotik Tütsü Yeniden Tanıtılıyor"
        btn="keşfetmek"
      />
    </div>
  );
};

export default TurkishHome;
