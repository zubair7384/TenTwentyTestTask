import React, { useRef, useState } from "react";
import "./productSlider.scss";

const ProductSlider = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [transLeftOffset, setTransLeftOffset] = useState(null);
  const [dragSpeed, setDragSpeed] = useState(props.dragSpeed);
  const cRef = useRef(null);

  const handleMouseDown = (e) => {
    const carousel = cRef.current;
    e.persist();
    carousel.classList.add("active");
    const _startX = e.pageX - carousel.offsetLeft;
    const _transLeftOffset = giveMeIntValOf(
      carousel.firstChild.style.transform
    );
    setIsDown(true);
    setStartX(_startX);
    setTransLeftOffset(_transLeftOffset);
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - _startX) * dragSpeed;
    carousel.firstChild.style.cssText = `
      transform: translateX(${_transLeftOffset + walk}px);
      transition: transform 0.0s ease-in-out;
    `;
  };

  const handleMouseLeave = (e) => {
    handleSnap();
  };

  const handleMouseUp = (e) => {
    handleSnap();
  };

  const handleMouseMove = (e) => {
    const carousel = cRef.current;
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * dragSpeed;
    carousel.firstChild.style.transform = `translateX(${
      transLeftOffset + walk
    }px)`;
  };

  const handleSnap = () => {
    const { data, itemWidth, itemSideOffsets } = props;
    const carousel = cRef.current;

    setIsDown(false);
    carousel.classList.remove("active");

    const tempThresholdOffset = giveMeIntValOf(
      carousel.firstChild.style.transform
    );
    const end =
      data.length * (itemWidth + 2 * itemSideOffsets) -
      30 -
      carousel.offsetWidth;

    if (tempThresholdOffset < 0 || tempThresholdOffset > end) {
      setIsDown(false);
      carousel.firstChild.style.cssText = `
        transform: translateX(${tempThresholdOffset < 0 ? 0 : end}px);
        transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
      `;
    }
    console.log(props.activeSlideIndex, "RRR");
  };

  const giveMeIntValOf = (el) => {
    return parseInt(el.replace("translateX(", "").replace("px)", ""), 10);
  };

  const { data, itemWidth, itemHeight, itemSideOffsets } = props;

  const cWrapperStyle = {
    width: `${data.length * (itemWidth + 2 * itemSideOffsets)}px`,
    height: `${itemHeight}px`,
  };

  const itemStyle = {
    width: `${itemWidth}px`,
    height: `${itemHeight}px`,
    margin: `0px ${itemSideOffsets}px`,
  };

  return (
    <div
      className="carousel"
      ref={cRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div
        className="cWrapper"
        style={{
          ...cWrapperStyle,
          transform: "translateX(0px)",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ProductSlider;
