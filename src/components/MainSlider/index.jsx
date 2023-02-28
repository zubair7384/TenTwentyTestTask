import React, { useState, useEffect } from "react";
import "./mainSlider.scss";

const MainSlider = ({ images, thumbs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    sliderWrapper.style.backgroundPosition = `center -${currentSlide * 100}%`;
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentSlide ? "active-slide" : ""}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
            <div className="slide-caption">{`Slide ${index + 1}`}</div>
          </div>
        ))}
      </div>

      <div className="thumbs-wrapper">
        {thumbs.map((thumb, index) => (
          <div
            className={`thumb ${index === currentSlide ? "active-thumb" : ""}`}
            key={index}
            onClick={() =>
              setCurrentSlide(index === thumbs.length - 1 ? 0 : index)
            }
          >
            <img
              className={`${index !== currentSlide + 1 ? "d-none" : ""}`}
              src={thumb}
              alt={`Thumb ${index}`}
            />
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

export default MainSlider;
