import { useState, useEffect } from "react";
import "./index.scss";
import image_1 from "../../assets/section_1_1.jpg";
import image_2 from "../../assets/section_1_2.jpg";
import image_3 from "../../assets/section_1_3.jpg";

const images = [image_1, image_2, image_3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0);
    }, 4000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="slider">
      <div
        id="slider"
        className="slider"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      />

      <div className="text">
        <h1>Elektrik avtomobilləri üçün ekoloji təmiz şarj stansiyaları.</h1>
        <p>
          Elektrik avtomobilləri üçün innovativ və ekoloji təmiz şarj
          stansiyaları, sürətli enerji doldurma və dayanıqlı həllər təklif edirik.
        </p>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Slider;
