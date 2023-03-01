import React, { useState, useEffect, useRef } from "react";
import "./mainSlider.scss";

const MainSlider = ({ images, thumbs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }, 100000); // Change time interval as needed
    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log(mousePosition, "mousePosition");
  };

  const getOffset = () => {
    if (slideRef.current) {
      const rect = slideRef.current.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
      };
    } else {
      return { left: 0, top: 0 };
    }
  };

  const getTransform = () => {
    const slideOffset = getOffset();
    const dx = mousePosition.x - slideOffset.left;
    const x = (dx / slideRef?.current?.offsetWidth - 0.3) * 4;
    return ` perspective(1000px)  rotateY(${x}deg)`;
  };

  const mouseMoveStyle = {
    transform: getTransform(),
  };

  return (
    <div className="main-slider">
      <div
        className="main-slider-wrapper"
        ref={slideRef}
        onMouseMove={handleMouseMove}
      >
        {images.map((image, index) => (
          <div
            className={`main-slide ${
              index === currentSlide ? "active-slide" : ""
            }`}
            key={index}
            style={mouseMoveStyle}
          >
            <div className="main-slider-content">
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
            <img
              style={{ transform: "scale(1.2)" }}
              src={image}
              alt={`Slide ${index}`}
            />
            <div className="main-slide-caption">{`Slide ${index + 1}`}</div>
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
