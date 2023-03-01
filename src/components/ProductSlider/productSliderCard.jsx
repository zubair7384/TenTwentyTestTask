import React from "react";
import ProductOne from "../../assets/images/product-1.jpg";
import ProductTwo from "../../assets/images/product-2.jpg";
import ProductThree from "../../assets/images/product-3.jpg";
import "./productSlider.scss";

const Card = (props) => {
  const get_coords = (radian_interval, radius) => {
    return {
      x: Math.cos(radian_interval) * radius,
      y: Math.sin(radian_interval) * radius,
    };
  };

  let coord = get_coords(props.radian_interval, props.radius);

  return (
    <div
      className="card"
      style={{
        left: `${props.center.x + coord.x}px`,
        top: `${props.center.y - coord.y}px`,
      }}
    >
      <img src={props.image} alt="product" />
    </div>
  );
};

export default Card;
