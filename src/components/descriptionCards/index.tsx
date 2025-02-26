import "./index.scss";
import section2_card1 from "../../assets/icons/section2_card1.png";
import section2_card2 from "../../assets/icons/section2_card2.png";
import section2_card3 from "../../assets/icons/section2_card3.png";
import section2_card4 from "../../assets/icons/section2_card4.png";
import arrow_right from "../../assets/icons/arrow-up-right.png";

const DescriptionCards = () => {
  const cards = [
    {
      icon: section2_card1,
      head: "Yüksək keyfiyyətli stansiya",
      desc: "Sürətli, etibarlı və dayanıqlı şarj təcrübəsi üçün yüksək keyfiyyətli stansiyalar.",
    },
    {
      icon: section2_card2,
      head: "Asan Quraşdırma",
      desc: "İstənilən mühitə uyğun sadə və sürətli şarj stansiyası quraşdırılması.",
    },
    {
      icon: section2_card3,
      head: "Şarj aksesuarları",
      desc: "Elektrik avtomobiliniz üçün uyğun və keyfiyyətli şarj aksesuarları.",
    },
    {
      icon: section2_card4,
      head: "Bərpa olunan enerji",
      desc: "Təmiz enerji həlləri ilə ekoloji dostu şarj imkanları.",
    },
  ];

  return (
    <div id="descriptionCards">
      <div className="container">
        <div className="head">
          <div className="left">
            <p data-aos="fade-up">Elektrikli Avtomobillər</p>
            <h1 data-aos="fade-up">Sabahı Bugündən Sür: Elektrik İnqilabı</h1>
          </div>

          <div className="right">
            <p data-aos="fade-up">
              Şarj yerini lazım olduğundan artıq müddətə tutmamaq, təyin olunmuş
              vaxt limitlərinə riayət etmək və şarj stansiyası etik qaydalarına
              diqqət yetirmək kimi təcrübələr, hamı üçün daha rahat istifadəni
              təmin edə bilər.
            </p>
          </div>
        </div>

        <div className="bottom">
          <div className="cards">
            {cards?.map((e, i) => {
              return (
                <div className="card" key={i} data-aos="fade-up">
                  <div className="icon">
                    <img src={e?.icon} alt="High quality stations" />
                  </div>

                  <h2>{e.head}</h2>
                  <p>{e.desc}</p>

                  <div className="arrow">
                    <p>Daha ətraflı</p>
                    <img src={arrow_right} alt="read more" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCards;
