import "./index.scss";
import hero1 from "../../assets/section2_hero1.jpg";
import hero2 from "../../assets/section2_hero2.jpg";
import key_2 from "../../assets/key_2.png";
import parts_2 from "../../assets/parts_2.png";
import { useRef } from "react";
import useTriggeredCountUp from "../triggerCountUp";

const AboutUs = () => {
  const ref = useRef(null);
  const countUp = useTriggeredCountUp(ref, 12, 4000);

  return (
    <div id="aboutUs">
      <div className="container">
        <div className="left">
          <div className="experience-badge">
            <h2 ref={ref}>{countUp}K+</h2>
            <p>Years Experience</p>
          </div>

          <img src={hero1} className="hero1" />
          <img src={hero2} className="hero2" />
        </div>

        <div className="right">
          <h1 data-aos="fade-up">Solutions For All EV Charging Programs!</h1>

          <p className="description" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="cards" data-aos="fade-up">
            <div className="card">
              <div className="icon">
                <img src={key_2} />
              </div>
              <div className="head">
                <h3>Warranty Extensions</h3>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="card secondCard">
              <div className="icon">
                <img src={parts_2} />
              </div>
              <div className="head">
                <h3>Spare Parts Management</h3>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
