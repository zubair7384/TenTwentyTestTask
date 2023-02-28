import React, { useState, useRef } from "react";
// import "./Slider.scss";

const CardSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentSlide ? "active-slide" : ""}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <div className="slider-nav">
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
