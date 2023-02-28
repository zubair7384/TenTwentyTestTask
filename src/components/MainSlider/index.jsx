import React, { useState, useEffect, useRef } from "react";
import "./mainSlider.scss";

const MainSlider = ({ images, thumbs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderWrapperRef = useRef(null);

  useEffect(() => {
    sliderWrapperRef.current.style.backgroundPosition = `center -${
      currentSlide * 100
    }%`;
  }, [currentSlide]);

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
      <div className="slider-wrapper" ref={sliderWrapperRef}>
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentSlide ? "active-slide" : ""}`}
            key={index}
          >
            <div className="slider-content">
              <p className="fadeInUp-1">
                <span>Welcome</span>
                <span>To</span>
                <span>TenTwenty Farms</span>
              </p>
              <h2>
                <span className="fadeInUp-2">From our Farms</span>
                <br />
                <span className="fadeInUp-3">to your hands</span>
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
