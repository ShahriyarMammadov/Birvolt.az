import { useRef } from "react";
import useTriggeredCountUp from "../triggerCountUp";
import "./index.scss";

const Statistics = () => {
  const counts = [
    { end: 7, suffix: "M+", desc: "Charging Session Initiated" },
    { end: 12, suffix: "K+", desc: "Charging Station In Network" },
    { end: 80, suffix: "%+", desc: "Eco-Friendly Charging Station" },
    { end: 123, suffix: "+", desc: "Units Available In This Region" },
  ];

  return (
    <div id="statistics" data-aos="fade-up">
      <div className="container">
        <div className="counts">
          {counts.map((item, index) => {
            const ref = useRef(null);
            const countUp = useTriggeredCountUp(ref, item.end, 4000);

            return (
              <div className="count" key={index}>
                <h2 ref={ref}>
                  {countUp}
                  {item?.suffix}
                </h2>
                <p>{item?.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
