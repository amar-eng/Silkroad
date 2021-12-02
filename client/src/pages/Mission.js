import React from "react";
import "../styles/Mission.scss";
import protect from "../assets/protect2.png";
import medicine from "../assets/medicine3.png";
import econ from "../assets/econ.png";
const Mission = () => {
  const data = [
    {
      id: 1,
      title: "Provide incense & herbal medicine",
      text: " The return of the 'Land of Punt' to the world's Frankincense and Myrrh market.",
      icon: medicine,
    },
    {
      id: 2,
      title: "Protect the environment",
      text: "Produce with a conscious awareness of environmental impacts. ",
      icon: protect,
    },
    {
      id: 3,
      title: "Boost the local economy",
      text: "Fair pay to farmers and local dealers of health and wellness plants.",
      icon: econ,
    },
  ];
  return (
    <div className="mission">
      <h1 className="mission__header">
        {" "}
        A healing experience like never before
      </h1>
      <h2 className="mission__subheader">
        {" "}
        Established in 2018, We are a professional transparent and family-owned
        business based in Mogadishu - Somalia with hands on experience in
        producing highest quality of Frankincense, Myrrh, and other herbal
        medicine to our clients all over the world.{" "}
      </h2>
      <div className="mission__container">
        {/* <h1 className="mission__header">Our Mission</h1> */}
        {data.map((item) => (
          <div className="mission__item" key={item.id}>
            <img src={item.icon} alt="icon" className="mission__icon" />
            <h2 className="mission__title">{item.title}</h2>
            <p className="mission__text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
