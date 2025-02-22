import "./index.scss";
import hero_1 from "../../assets/section3_hero1.jpg";
import hero_2 from "../../assets/section3_hero2.jpg";
import hero_3 from "../../assets/section3_hero3.jpg";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <div id="section3Component">
      <div className="container">
        <div className="left">
          <div className="head">
            <p className="category" data-aos="fade-up">
              ( Why Choose Us )
            </p>
            <h4 data-aos="fade-up">The Biggest EV Charging Station</h4>
          </div>
          <img src={hero_1} alt="charge stations" data-aos="fade-up" />
        </div>

        <div className="secondary">
          <img src={hero_2} alt="charge stations" data-aos="fade-up" />
        </div>

        <div className="right">
          <img src={hero_3} alt="charge stations" data-aos="fade-up" />

          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="btn" data-aos="fade-up">
            <Link to={"/"}>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
