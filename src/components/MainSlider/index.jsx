import React, { useState, useEffect, useRef } from "react";
import "./mainSlider.scss";

const MainSlider = ({ images, thumbs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }, 100000); // Change time interval as needed
    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  return (
    <div className="slider">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentSlide ? "active-slide" : ""}`}
            key={index}
          >
            <div className="slider-content">
              <p
                className={`${
                  index === currentSlide ? "active-slide fadeInLeft-1" : ""
                }`}
              >
                Welcome To TenTwenty Farms
              </p>
              <h2
                className={`${
                  index === currentSlide ? "active-slide fadeInUp-1" : ""
                }`}
              >
                From our Farms
                <br />
                to your hands
              </h2>
            </div>
            <img src={image} alt={`Slide ${index}`} />
            <div className="slide-caption">{`Slide ${index + 1}`}</div>
          </div>
        ))}
      </div>

      <div className="thumbs-wrapper">
        {thumbs.map((thumb, index) => (
          <div
            className={`thumb ${index === currentSlide ? "active-thumb" : ""} `}
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
        <div className="thumbNumbers">
          <span>01</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
