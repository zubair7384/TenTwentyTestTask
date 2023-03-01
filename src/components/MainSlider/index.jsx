import React, { useState, useEffect, useRef } from "react";
import MainSlideIcon from "../../assets/icons/main-slide-icon.svg";
import "./mainSlider.scss";

const MainSlider = ({ images, thumbs }) => {
  const [titleAnimated, setTitleAnimated] = useState(false);
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
    const x = (dx / slideRef?.current?.offsetWidth - 0.3) * 2;
    return ` perspective(1000px)  rotateY(${x}deg)`;
  };

  const mouseMoveStyle = {
    // transition: "transform 0.3s ease",
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
                onAnimationEnd={() => setTitleAnimated(true)}
              >
                Welcome To TenTwenty Farms
              </p>
              <h2
                className={`${
                  index === currentSlide && titleAnimated
                    ? "active-slide fadeInUp-1 opacity-1"
                    : "opacity-0"
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
        <img
          // className="slider-icon"
          className={
            currentSlide + 1 === 1
              ? "slider-icon-1st"
              : currentSlide + 1 === 2
              ? "slider-icon-2nd"
              : currentSlide + 1 === 3
              ? "slider-icon-3rd"
              : currentSlide + 1 === 4
              ? "slider-icon-4th"
              : ""
          }
          src={MainSlideIcon}
          alt="main-slide-icon"
        />
        {thumbs.map((thumb, index) => (
          <div
            className={`thumb ${
              index === currentSlide + 1 ? "active-thumb" : "d-none"
            } `}
            key={index}
            onClick={() =>
              setCurrentSlide(index === thumbs.length - 1 ? 0 : index)
            }
          >
            <img src={thumb} alt={`Thumb ${index}`} />
          </div>
        ))}
        <div className="thumbNumbers">
          <span>0{currentSlide + 1}</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
