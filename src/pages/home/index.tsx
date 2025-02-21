import React, { useRef } from "react";
import "./index.scss";
import chargeImage from "../../assets/section_1_chargeImage.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import useTriggeredCountUp from "../../components/triggerCountUp";

const persons = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuKrCOCGFApxN4dscz1OzHuCEx7rzL8pbLQ&s",
  },
  {
    image:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2554",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHyxPK2yeehZRCtrNt-LzzQKQ5sDRLeBqGQ&s",
  },
];

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  const ref = useRef(null);

  const countUp = useTriggeredCountUp(ref, 250, 4000);

  return (
    <div id="homePage">
      <section id="section1">
        <div className="container">
          <div className="left" data-aos="fade-up">
            <h1>Eco Friendly For Electric Car</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="right">
            <div className="hero" data-aos="fade-up" data-aos-duration="1000">
              <img src={chargeImage} alt="birvolt" />
            </div>

            <div className="right_content" data-aos="zoom-in-up">
              <h4 ref={ref}>{countUp}K+</h4>

              <div className="persons">
                {persons?.map((e: any, i: number) => {
                  return (
                    <div key={i} className="person">
                      <img src={e?.image} alt="" />
                    </div>
                  );
                })}

                <div className="person plus">+</div>

                <p>Let's join us</p>
              </div>

              <Link to={"/"} className="getStarted">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
