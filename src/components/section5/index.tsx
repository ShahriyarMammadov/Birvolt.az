import { Link } from "react-router-dom";
import "./index.scss";
import hero1 from "../../assets/section5_hero1.jpg";

const Section5 = () => {
  return (
    <div id="section5Component">
      <div className="container">
        <div className="head">
          <p className="ourService">( Main Features )</p>
          <h1>Elevate Your Eco - Journey</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="btn">
              <Link to={"/"}>Learn More</Link>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="left">
            <img src={hero1} alt="ev stations" />
          </div>

          <div className="right">
            <div className="cards" data-aos="fade-up">
              <div className="card">
                <p className="headText">Technology</p>

                <div className="head">
                  <h3>Smart Security</h3>
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec.
                  </p>
                </div>
              </div>

              <div className="card secondCard">
                <p className="headText">Connectivity</p>

                <div className="head">
                  <h3>Smart Connected</h3>
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
