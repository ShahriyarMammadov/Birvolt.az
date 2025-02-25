import "./index.scss";
import section2_card1 from "../../assets/icons/section2_card1.png";
import section2_card2 from "../../assets/icons/section2_card2.png";
import section2_card3 from "../../assets/icons/section2_card3.png";
import section2_card4 from "../../assets/icons/section2_card4.png";

const DescriptionCards = () => {
  const cards = [
    {
      icon: section2_card1,
      head: "Yüksək keyfiyyətli stansiya",
      desc: "Practices such as avoiding occupying a charging space longer than necessary, adhering to posted time limits.",
    },
    {
      icon: section2_card2,
      head: "Asan Quraşdırma",
      desc: "Practices such as avoiding occupying a charging space longer than necessary, adhering to posted time limits.",
    },
    {
      icon: section2_card3,
      head: "Şarj aksesuarları",
      desc: "Practices such as avoiding occupying a charging space longer than necessary, adhering to posted time limits.",
    },
    {
      icon: section2_card4,
      head: "Bərpa olunan enerji",
      desc: "Practices such as avoiding occupying a charging space longer than necessary, adhering to posted time limits.",
    },
  ];

  return (
    <div id="descriptionCards">
      <div className="container">
        <div className="head">
          <div className="left">
            <p>Electric Vehicle</p>
            <h1>Driving Tomorrow Today: The Electric Evolution</h1>
          </div>

          <div className="right">
            <p>
              Practices such as avoiding occupying a charging space longer than
              necessary, adhering to posted time limits, and being mindful of
              charging station etiquette can help ensure.
            </p>
          </div>
        </div>

        <div className="bottom">
          <div className="cards">
            {cards?.map((e, i) => {
              return (
                <div className="card" key={i}>
                  <div className="icon">
                    <img src={e?.icon} alt="High quality stations" />
                  </div>

                  <h2>{e.head}</h2>
                  <p>{e.desc}</p>
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
