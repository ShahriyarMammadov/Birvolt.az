import React, { useRef } from "react";
import "./index.scss";
import chargeImage from "../../assets/section_1_chargeImage.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import useTriggeredCountUp from "../../components/triggerCountUp";
import Statistics from "../../components/statistics";
import AboutUs from "../../components/aboutUs";
import Section3 from "../../components/section3";
import Carousel from "../../components/carousel";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Section6 from "../../components/section6";

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
  const ref = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
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

          <div className="right" data-aos="zoom-in-up">
            <div className="hero" data-aos="fade-up">
              <img src={chargeImage} alt="birvolt" />
            </div>

            <div className="right_content">
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

      <section id="section2">
        <Statistics />

        <AboutUs />
      </section>

      <section id="section3">
        <Section3 />
      </section>

      <div className="carousel">
        <Carousel />
      </div>

      <section id="section4">
        <Section4 />
      </section>

      <section id="section5">
        <Section5 />
      </section>

      <section id="section6">
        <Section6 />
      </section>
    </div>
  );
};

export default HomePage;
