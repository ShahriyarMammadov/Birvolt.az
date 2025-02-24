import React from "react";
import "./index.scss";
import { useEffect } from "react";
import AOS from "aos";
import Statistics from "../../components/statistics";
import AboutUs from "../../components/aboutUs";
import Section3 from "../../components/section3";
import Carousel from "../../components/carousel";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Section6 from "../../components/section6";
import Slider from "../../components/slider";

const HomePage: React.FC = () => {
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

  return (
    <div id="homePage">
      <section id="section1">
        <Slider />
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
