import React from "react";
import "../styles/Mission.scss";
import protect from "../assets/protect2.png";
import medicine from "../assets/medicine3.png";
import econ from "../assets/econ.png";
const TurkishMission = () => {
  const data = [
    {
      id: 1,
      title: "Tütsü ve bitkisel ilaç sağlayın",
      text: " 'Land of Punt'ın dünyanın Frankincense ve Myrrh pazarına dönüşü.",
      icon: medicine,
    },
    {
      id: 2,
      title: "Çevreyi Koru",
      text: "Çevresel etkilerin bilincinde olarak üretin. ",
      icon: protect,
    },
    {
      id: 3,
      title: "Yerel ekonomiyi canlandırın",
      text: "Çiftçilere ve sağlık ve zindelik bitkilerinin yerel bayilerine adil ödeme.",
      icon: econ,
    },
  ];
  return (
    <div className="mission">
      <h1 className="mission__header">
        {" "}
        Daha önce hiç olmadığı gibi bir şifa deneyimi
      </h1>
      <h2 className="mission__subheader turkish">
        {" "}
        2018 yılında kurulan, profesyonel şeffaf ve aileye ait bir şirketiz.
        Mogadişu - Somali'de uygulamalı deneyime sahip işletme Buhur, Mür ve
        diğer bitkisel ürünlerin en yüksek kalitede üretilmesi dünyanın her
        yerindeki müşterilerimize ilaç.{" "}
      </h2>
      <div className="mission__container">
        {/* <h1 className="mission__header">Our Mission</h1> */}
        {data.map((item) => (
          <div className="mission__item" key={item.id}>
            <img src={item.icon} alt="icon" className="mission__icon" />
            <h2 className="mission__title">{item.title}</h2>
            <p className="mission__text turkish">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TurkishMission;
