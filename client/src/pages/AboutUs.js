import React from "react";
import beeyo from "../assets/2.jpg";
import malmal from "../assets/3.jpg";
import xabag from "../assets/1.jpg";
import opopnax from "../assets/5.jpg";
import hagar from "../assets/hagar.jpeg";
import luban from "../assets/4.jpg";
import "../styles/About.scss";
const AboutUs = () => {
  const data = [
    {
      id: 1,
      name: "Beeyo Frankincense",
      type: "Boswellia Carteri",
      desc: "Beeyo also known as olibanum, frankincense comes from trees in the Boswellia family. Boswellia trees are native to Somalia, Yemen, Oman and India. Traditionally Somalis, Egyptians, Greek, Indian and Chinese medicines revered frankincense as an important remedy for conditions involving pain and inflammation, and those of the digestive, respiratory, blood circulation and nerves system. The early Persian physician Ibn Sina documents using frankincense for ulcers, tumors, fevers, dysentery and vomiting. In Ayurvedic practice, frankincense has been used in internal medicine, trauma care and dermatology. In Europe today, the frankincense essential oil and resin are being studied and used in clinical applications that are shedding new light on possible cancer treatments.",
      image: beeyo,
    },
    {
      id: 2,
      name: "Malmal",
      type: "Myrrh",
      desc: "Resin that comes from trees belonging to the genus Commiphora, which grow in Northern Africa, Somalia, Yemen, Ethiopia. In Ancient Egypt, myrrh was used to treat hay fever and herpes. The ancient Greeks used it as an antiseptic to clean up wounds and skin problems.Malmal is used for the stomach and intestines, congestion, parasite infections, wounds, swelling. A salve of myrrh used as an analgesic can assuage the discomfort of topical ulcerations, and malmal can be made into an oil, syrups, mouthwash for spongy gums, ulcerated throats and mouth sores, body creams.",
      image: malmal,
    },
    {
      id: 3,
      name: "Opoponax",
      type: "sweet myrrh",
      desc: "Native to East Africa, Mostly Somalia, Opoponax was used in ancient times as incense and herbal remedies. Myrrh and opoponax have almost same properties because the plant source is closely related. Opoponax’ gum dries to form dark reddish-brown lumps that produce a sweet and robust-like aroma. For many centuries, Sweet Myrrh Opoponax has been used for treating wounds and clearing respiratory congestion. Sweet Myrrh oil exerts a drying action on mucous membranes, allowing relief from bronchitis, colds, sore throats, and coughs. The properties of this resin are similar to those of Myrrh, and thus both the resin and the bark have been used in a similar way, as an antiseptic and anti-inflammatory. In particular, they have played a role in traditional medicine to help heal the physical scars, cleanse, disinfect and tighten the womb after birth. Opoponax is known to have high class fragrance.",
      image: opopnax,
    },
    {
      id: 4,
      name: "Hagar Resin",
      type: "Commiphora holtziana",
      desc: "Hagar is a resin that comes from trees belonging to the genus Commiphora holtziana. Hagar resin is native to Somalia, hagar resin which exudates either naturally or following an incision on the trunk or the big branches has been intensively traded since dawn of time. Traditionally hagar was used acaricide against ticks, foot rot, mange and other livestock ailments. Antidote for scorpion stings and snake bites. Commercially it is a well-established herbal medicine for treatment of inflammation, arthritis, microbial infections, pain, fractures, insect repellent and severe itches. It is a very important product in the cosmetic and essential oil industries.",
      image: hagar,
    },
    {
      id: 5,
      name: "Lubaan Maydi ",
      type: "Boswellia Frereana",
      desc: "Frankincense B. Frereana (Maydi) is known as king of frankincense. With a sweet and warm amber fragrance highlighted by spice, and floral notes, Frankincense Frereana differs from most other types of frankincense. Burning maydi incense at home was Somali tradition to sweeten the air after cooking, to add fragrance to clothing and used on special occasions. When Maydi is burned indoors, its scent is earthy yet uplifting, with a slightly sweet-woodsy aroma. When inhaled through the nose, clears the lungs from any harm full   it or diffused into the air.",
      image: luban,
    },
    {
      id: 6,
      name: "Habag Adaad",
      type: "Gum Arabic",
      desc: "Due to its high soluble fiber content, acacia fiber is thought to help lower cholesterol levels, keep blood sugar in check, protect against diabetes, and aid in the treatment of digestive disorders such as irritable bowel syndrome. One study showed that taking 15 grams of acacia gum in liquid form every day helped manage the concentration of plasma cholesterols in blood. The properties of acacia gum allow it to be used in solutions to coat your throat and protect the mucus in your throat from irritation. While it is natural probiotic, Gum Arabic increased urinary excretion and decreased plasma phosphate concentration, plasma urea concentration.",
      image: xabag,
    },
  ];

  return (
    <section className="resins">
      <h1 className="resins__name">Our Resins</h1>
      {data.map((item) => {
        return (
          <div className="container" key={item.id}>
            <div className="container__content">
              <h2 className="container__title">
                {item.id} ) {item.name} - <span>{item.type}</span>{" "}
              </h2>
              <p className="container__desc">{item.desc}</p>{" "}
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="container__image"
            />
          </div>
        );
      })}
    </section>
  );
};

export default AboutUs;
