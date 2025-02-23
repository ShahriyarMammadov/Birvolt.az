import "./index.scss";
import app from "../../assets/app.png";

const Section6 = () => {
  return (
    <div id="section6Component">
      <div className="container">
        <div className="content">
          <div className="left">
            <p className="ourService">( Download Volthub App )</p>

            <h1>Find Charging Stations Near You With Our App</h1>

            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="right">
            <img src={app} alt="app" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
