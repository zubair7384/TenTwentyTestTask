import React from "react";

const styles = {
  card: {
    margin: "0",
    padding: "0",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "blue",
  },
};

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
      style={{
        ...styles.card,
        left: `${props.center.x + coord.x}px`,
        top: `${props.center.y - coord.y}px`,
      }}
    ></div>
  );
};

export default Card;
