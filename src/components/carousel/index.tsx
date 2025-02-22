import "./index.scss";

const Carousel = () => {
  const data = [
    "https://kitpro.site/volthub/wp-content/uploads/sites/264/2024/08/0logoipsum-262-1.png",
    "https://kitpro.site/volthub/wp-content/uploads/sites/264/2024/08/0logoipsum-262-1.png",
    "https://kitpro.site/volthub/wp-content/uploads/sites/264/2024/08/0logoipsum-262-1.png",
    "https://kitpro.site/volthub/wp-content/uploads/sites/264/2024/08/a15.png",
    "https://kitpro.site/volthub/wp-content/uploads/sites/264/2024/08/a12.png",
  ];

  const infiniteData = [...data, ...data];

  return (
    <div id="carousel">
      <div className="container">
        <div className="carousel-track">
          {infiniteData.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt={`carousel-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
