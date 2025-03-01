import React, { useRef, useState } from "react";
import "./index.scss";
import { Image } from "antd";
import { Link } from "react-router-dom";

const ProductsComponent = () => {
  const products = [
    {
      coverImage:
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_01.jpg",
      images: [
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_01.jpg",
      ],
      name: "2-Port Charging Station",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$2,499",
    },
    {
      coverImage:
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      images: [
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      ],
      name: "Home Charging Mini",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$2,000",
    },
    {
      coverImage:
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      images: [
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      ],
      name: "Home Charging Mini",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$2,000",
    },
    {
      coverImage:
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      images: [
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      ],
      name: "Home Charging Mini",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$2,000",
    },
    {
      coverImage:
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      images: [
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      ],
      name: "Home Charging Mini",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$2,000",
    },
    {
      coverImage:
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      images: [
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      ],
      name: "Home Charging Mini",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$2,000",
    },
    {
      coverImage:
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      images: [
        "https://equant.like-themes.com/wp-content/uploads/2024/04/shop_02.jpg",
      ],
      name: "Home Charging Mini",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$2,000",
    },
  ];

  const productsRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!productsRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - productsRef.current.offsetLeft);
    setScrollLeft(productsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !productsRef.current) return;
    e.preventDefault();
    const x = e.pageX - productsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    productsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div id="productsComponent">
      <div className="container">
        <h1>Şarj Stansiyaları</h1>
        <div
          className="products"
          ref={productsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {products?.map((e, i) => (
            <div className="card" key={i}>
              <div className="image">
                <Image src={e.coverImage} alt={e.name} />
              </div>
              <Link to={"/"}>
                <h3>{e.name}</h3>
                <p className="description">{e.description.slice(0, 65)}...</p>
                <p className="price">{e.price}</p>
              </Link>
              <button className="addToBasketBtn">Səbətə əlavə et</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
