import React, { useState } from "react";
import ProductSlider from "../../components/ProductSlider";
import Carousel from "../../components/ProductSlider";
import ProductOne from "../../assets/images/product-1.jpg";
// import ProductTwo from "../../assets/images/product-2.jpg";
import ProductThree from "../../assets/images/product-3.jpg";
import "./qualityProducts.scss";

const slides = [ProductOne, ProductThree, ProductOne, ProductThree, ProductOne];
// const slides = [
//   {
//     image: ProductOne,
//     title: "This in 1st product",
//   },
//   {
//     image: ProductTwo,
//     title: "This in 2nd product",
//   },
//   {
//     image: ProductThree,
//     title: "This in 3rd product",
//   },
// ];

const QualityProducts = () => {
  const items = ["one", "two", "three", "four", "five"];

  const setting = {
    dragSpeed: 0.4,
    itemWidth: 280,
    itemHeight: 657,
    itemSideOffsets: 150,
  };

  const itemStyle = {
    width: `${setting.itemWidth}px`,
    height: `${setting.itemHeight}px`,
    margin: `0px ${setting.itemSideOffsets}px`,
  };

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="quality-products">
      <div className="quality-products-content">
        <h2>Quality Products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* <ProductSlider slides={slides} imageSize="150px" />
       */}
      <Carousel _data={items} {...setting} activeSlideIndex={activeSlideIndex}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item ${index === activeSlideIndex ? "active" : ""}`}
            style={{ ...itemStyle }}
          >
            <img src={slide} alt="slider-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default QualityProducts;
