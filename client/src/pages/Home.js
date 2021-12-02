import React from "react";
import "../styles/Home.scss";
import Hero from "../components/Hero";
import AboutUs from "./AboutUs";
import Mission from "./Mission";

const Home = () => {
  return (
    <div className="home">
      <Hero
        subtitle="Re-Introducing Aromatic Resins And Exotic Incense"
        btn="Explore"
      />
      <Mission />
      <AboutUs />
    </div>
  );
};

export default Home;
