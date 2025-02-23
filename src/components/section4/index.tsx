import "./index.scss";
import ev_station from "../../assets/ev_station.png";
import serviceCard_1 from "../../assets/serviceCard_1.png";
import serviceCard_2 from "../../assets/serviceCard_2.png";
import serviceCard_3 from "../../assets/serviceCard_3.png";
import serviceCard_4 from "../../assets/serviceCard_4.png";
import arrow from "../../assets/left_arrow.png";

const Section4 = () => {
  return (
    <div id="section4Component">
      <div className="container">
        <div className="head">
          <p className="ourService">( Our Service )</p>
          <h1>Excellent & Best Service</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="content">
          <div className="left">
            <div className="service-card">
              <div className="icon-container">
                <img src={serviceCard_1} alt="" className="icon" />
                <img src={arrow} alt="arrow" className="arrow" />
              </div>

              <div className="service-content">
                <h3>Building services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="icon-container">
                <img src={serviceCard_2} alt="" className="icon" />
                <img src={arrow} alt="arrow" className="arrow" />
              </div>

              <div className="service-content">
                <h3>Building services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>

          <div className="station">
            <img src={ev_station} alt="EV Station" />
          </div>

          <div className="right">
            <div className="service-card right-card">
              <div className="icon-container">
                <img src={serviceCard_3} alt="" className="icon" />
                <img src={arrow} alt="arrow" className="arrow" />
              </div>

              <div className="service-content">
                <h3>Building services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="service-card right-card">
              <div className="icon-container">
                <img src={serviceCard_4} alt="" className="icon" />
                <img src={arrow} alt="arrow" className="arrow" />
              </div>

              <div className="service-content">
                <h3>Building services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
