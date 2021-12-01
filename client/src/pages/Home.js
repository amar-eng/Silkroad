import React from "react";
import "../styles/Home.scss";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div className="home">
      <Hero
        subtitle="Re-Introducing Aromatic Resins And Exotic Incense"
        btn="Explore"
      />
    </div>
  );
};

export default Home;
