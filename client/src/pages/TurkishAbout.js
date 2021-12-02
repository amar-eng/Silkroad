import React from "react";
import beeyo from "../assets/2.jpg";
import malmal from "../assets/3.jpg";
import xabag from "../assets/1.jpg";
import opopnax from "../assets/5.jpg";
import hagar from "../assets/hagar.jpeg";
import luban from "../assets/4.jpg";
import "../styles/About.scss";
const TurkishAbout = () => {
  const data = [
    {
      id: 1,
      name: "Beeyo Frankincense",
      type: "Buhur B. Carterii",
      desc: "Doğal Çözüm. Yardım eder: Stres Tepkilerini ve Olumsuz Duyguları Azaltın Erkeklerde ve kadınlarda doğurganlığı artırın. Beyin fonksiyonunu, hafızayı ve zekayı teşvik edin Öksürük, soğuk algınlığı ve tıkanıklık için evde çare olarakArtrit ve Romatoid Artrit ile ilişkili ağrı ve iltihabı azaltmak için. 'Frankincense' kelimesi, 'yüksek kaliteli tütsü' anlamına gelen eski bir Fransızca 'franc' ve 'encens' ifadesinden türemiştir. Buhur, Somali'nin Xiji (günlük tarlaları) Bari ve Sanaag bölgelerinde bulunur. Buhur (Boswellia Carterii) Moxor ağacından gelir ve tütsü yerel olarak Beeyo olarak bilinir. BeeyoFrankincense, Burseraceae familyasının Boswellia'sına aittir. Buhur yanığı tütsü dumanı doğal oda spreyidir, zihinsel berraklık ve sakinleştirici etki verir, odadaki bakterileri öldürür. Soyut: Etnofarmakolojik uygunluk: Boswellia carteri Birdw reçinelerinden elde edilen uçucu yağlar. Sırasıyla buhur ve gerçek mür olarak bilinen Commiphora myrrha (Nees) Engl., geleneksel tıpta cilt yaraları, yaralar, dişler, iltihaplanma ve idrar yolu hastalıklarının tedavisi için MÖ 2800'den beri yaygın olarak kullanılmaktadır; mumyalama balzamları ve merhemlerinin hazırlanması için; ve ayrıca tütsü ve parfüm olarak. Eski zamanlardan beri, tapınma yerlerinde manevi amaçlar ve tefekkür (çeşitli dinlerde her yerde bulunan bir uygulama) için buhur ve mür yakmanın, iç mekan havasını temizleyerek kokuyu iyileştirmek ve bulaşmayı azaltmak için hijyenik işlevleri vardı.",
      image: beeyo,
    },
    {
      id: 2,
      name: "Malmal",
      type: "Mür",
      desc: "Mür yağı, günümüzde çeşitli rahatsızlıklar için bir çare olarak hala yaygın olarak kullanılmaktadır. Araştırmacılar, güçlü anti-inflamasyon ve antioksidan aktivitesi ve kanser tedavisi potansiyeli nedeniyle mür ile ilgilenmeye başladılar. Ayrıca bazı paraziter enfeksiyon türleriyle mücadelede de etkili olduğu gösterilmiştir. Talimatlar: Etkilenen bölgeye birkaç gün boyunca günde sadece birkaç kez uygulayın. Malmal mide ve bağırsaklar, tıkanıklık, parazit enfeksiyonları, yaralar, şişlikler için kullanılır. Analjezik olarak kullanılan bir mür merhemi topikal ülserasyonların rahatsızlığını hafifletebilir ve malmal yağ, şurup, süngerimsi diş etleri için gargara, ülserli boğaz ve ağız yaraları, vücut kremleri haline getirilebilir Malmal veya Mür, Kuzey Afrika, Somali, Yemen, Etiyopya'da yetişen Commiphora cinsine ait ağaçlardan elde edilen bir reçinedir. Eski Mısır'da mür, saman nezlesi ve uçukları tedavi etmek için kullanıldı. Eski Yunanlılar, yaraları ve cilt problemlerini temizlemek için antiseptik olarak kullandılar.",
      image: malmal,
    },
    {
      id: 3,
      name: "opoponaks",
      type: "sweet myrrh",
      desc: "Anavatanı Doğu Afrika, Çoğunlukla Somali olarak da bilinen (Tatlı Mür) Opoponax, eski zamanlarda tütsü ve bitkisel ilaçlar olarak kullanılmıştır. Bitki kaynağı yakından ilişkili olduğu için mür ve Opoponax hemen hemen aynı özelliklere sahiptir. Opoponax' sakızı, tatlı ve güçlü benzeri bir aroma üreten koyu kırmızımsı kahverengi topaklar oluşturmak için kurur. Yüzyıllardır Tatlı Mür Opoponax yaraları tedavi etmek ve solunum tıkanıklığını gidermek için kullanılmıştır. Tatlı Mür yağı, bronşit, soğuk algınlığı, boğaz ağrısı ve öksürükten kurtulmayı sağlayan mukoza zarlarında kurutma etkisi uygular.Native to East Africa, Mostly Somalia, Opoponax was used in ancient times as incense and herbal remedies. Myrrh and opoponax have almost same properties because the plant source is closely related. Opoponax’ gum dries to form dark reddish-brown lumps that produce a sweet and robust-like aroma. For many centuries, Sweet Myrrh Opoponax has been used for treating wounds and clearing respiratory congestion. Sweet Myrrh oil exerts a drying action on mucous membranes, allowing relief from bronchitis, colds, sore throats, and coughs. The properties of this resin are similar to those of Myrrh, and thus both the resin and the bark have been used in a similar way, as an antiseptic and anti-inflammatory. In particular, they have played a role in traditional medicine to help heal the physical scars, cleanse, disinfect and tighten the womb after birth. Opoponax is known to have high class fragrance.",
      image: opopnax,
    },
    {
      id: 4,
      name: "Opoponax",
      type: "Habag Hadi",
      desc: "Hacer. Doğal olarak veya gövdede veya büyük dallarda yapılan bir kesiden sonra sızan Hacer reçinesi, zamanın başlangıcından beri yoğun bir şekilde alınıp satılmaktadır. Doğu Afrika'daki çoğu hagar Somali'de bulunur.Hagar, keneler, ayak çürümesi, uyuz ve diğer hayvan rahatsızlıklarına karşı akarisit kullanıldı. Akrep sokmaları ve yılan sokmaları için panzehir. Ticari olarak, iltihaplanma, artrit, mikrobiyal enfeksiyonlar, ağrı, kırıklar, tümörler gastrointestinal hastalıkların tedavisi için köklü bir bitkisel ilaçtır. Kozmetik ve uçucu yağ endüstrilerinde çok önemli bir üründür.",
      image: hagar,
    },
    {
      id: 5,
      name: "Lubaan Maydi ",
      type: "Buhur Boswellia Frereana",
      desc: "Buhur B. Frereana (Maydi) buhur kralı olarak bilinir. Antimikrobiyal, antiinflamatuar, antikanser, antioksidan özellikler gibi çeşitli biyolojik aktiviteler sergilediği bilinen maydi, üstün bir aromaterapi tedavisidir. Frankincense Boswellia frereana'nın anti-inflamatuar etkileri, osteoartrit ve romatoid artritin neden olduğu eklem iltihabını azaltabilir. Maydi iç mekanda yakıldığında, kokusu hafif tatlı-odunsu bir aroma ile dünyevi ancak canlandırıcıdır. Burundan solunduğunda, akciğerleri dolduran veya havaya yayılan her türlü zararı temizler.",
      image: luban,
    },
    {
      id: 6,
      name: "Arap sakızı",
      type: "Gum Arabic",
      desc: "Gum Arabic, Acacia Senegal ağaçlarının dallarından elde edilen bir özdür. Doğal bir emülgatördür, Somali dahil birçok Afrika ülkesinde bulunur. Yüzyıllar boyunca, akasya ağaçlarının kabuğundan sızan kalın kehribar renkli reçine, geleneksel tıpta ve günlük uygulamalarda kullanılmak üzere tozlar ve macunlar halinde toplandı ve öğütüldü. Yüksek çözünür lif içeriği nedeniyle akasya lifinin kolesterol seviyelerini düşürmeye, kan şekerini kontrol altında tutmaya, diyabete karşı korumaya ve irritabl bağırsak sendromu gibi sindirim bozukluklarının tedavisine yardımcı olduğu düşünülmektedir. Bir çalışma, her gün sıvı halde 15 gram akasya sakızı almanın kandaki plazma kolesterol konsantrasyonunu yönetmeye yardımcı olduğunu gösterdi. Akasya sakızının özellikleri, boğazınızı kaplamak ve boğazınızdaki mukusu tahrişten korumak için solüsyonlarda kullanılmasına izin verir. Doğal probiyotik olmasına rağmen, Gum Arabic idrarla atılımı arttırdı ve plazma fosfat konsantrasyonunu, plazma üre konsantrasyonunu azalttı.",
      image: xabag,
    },
  ];

  return (
    <section className="resins">
      <h1 className="resins__name">Reçinelerimiz</h1>
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

export default TurkishAbout;
