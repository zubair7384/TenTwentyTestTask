import React, { useState, useEffect } from "react";
import ProductSlider from "../../components/ProductSlider";
import ProductOne from "../../assets/images/product-1.jpg";
import ProductThree from "../../assets/images/product-3.jpg";
import "./qualityProducts.scss";

const slides = [ProductOne, ProductThree, ProductOne, ProductThree, ProductOne];

const QualityProducts = () => {
  const [titleAnimated, setTitleAnimated] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const setting = {
    dragSpeed: 0.4,
    itemWidth: 280,
    itemHeight: 657,
    itemSideOffsets: 140,
  };
  const itemStyle = {
    width: `${setting.itemWidth}px`,
    height: `${setting.itemHeight}px`,
    margin: `0px ${setting.itemSideOffsets}px`,
  };

  useEffect(() => {
    const handleScroll = () => {
      const title = document.querySelector(".quality-products-content h2");
      const description = document.querySelector(".quality-products-content p");
      const titlePosition = title.getBoundingClientRect().top;
      const descriptionPosition = description.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (titlePosition || descriptionPosition < screenPosition) {
        setTitleAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [titleAnimated]);

  return (
    <div className="quality-products">
      <div className="quality-products-content">
        <h2 className={`${titleAnimated ? "fadeInUp-2" : ""}`}>
          Quality Products
        </h2>
        <p className={`${titleAnimated ? "fadeInLeft-1" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <ProductSlider
        data={slides}
        {...setting}
        activeSlideIndex={activeSlideIndex}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item ${index === activeSlideIndex ? "active" : ""}`}
            style={{ ...itemStyle }}
          >
            <img src={slide} alt="slider-image" />
          </div>
        ))}
      </ProductSlider>
    </div>
  );
};

export default QualityProducts;
