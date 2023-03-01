import React, { useState, useEffect, useRef } from "react";
import Card from "./productSliderCard.jsx";
import ProductOne from "../../assets/images/product-1.jpg";
import ProductTwo from "../../assets/images/product-1.jpg";
import ProductThree from "../../assets/images/product-3.jpg";

import "./productSlider.scss";

const Wheel = () => {
  const [radius, setRadius] = useState(500);
  const [cards, setCards] = useState([]);
  const [theta, setTheta] = useState(0.0);
  const [tempTheta, setTempTheta] = useState(0.0);
  const wheelRef = useRef(null);
  const animId = useRef(null);

  useEffect(() => {
    const center_of_wheel = {
      x: parseFloat(wheelRef.current.style.width) / 2,
      y: parseFloat(wheelRef.current.style.height) / 2,
    };
    const temp_cards = [
      {
        image: ProductOne,
        radian_interval: Math.PI / 4,
      },
      {
        image: ProductTwo,
        radian_interval: (Math.PI / 4) * 2,
      },
      {
        image: ProductThree,
        radian_interval: (Math.PI / 4) * 3,
      },
      {
        image: ProductOne,
        radian_interval: (Math.PI / 4) * 4,
      },
      {
        image: ProductTwo,
        radian_interval: (Math.PI / 4) * 5,
      },
      {
        image: ProductThree,
        radian_interval: (Math.PI / 4) * 6,
      },
      {
        image: ProductTwo,
        radian_interval: (Math.PI / 4) * 7,
      },
      {
        image: ProductThree,
        radian_interval: (Math.PI / 4) * 8,
      },
      // add more cards here
    ].map((card, i) => (
      <Card
        image={card.image}
        radius={radius}
        radian_interval={card.radian_interval}
        center={center_of_wheel}
        key={`card_${i}`}
      />
    ));

    setCards(temp_cards);
  }, [radius]);

  const handleScroll = (event) => {
    clearTimeout(animId.current);
    wheelRef.current.style.transform = `translate(0, -50%) rotate(${
      tempTheta - event.deltaY * 0.006
    }deg)`;
    setTempTheta(tempTheta - event.deltaY * 0.006);
    animId.current = setTimeout(() => {
      setTheta(tempTheta);
    }, 150);
  };
  return (
    <div className="weel-wrapper">
      <div onWheel={handleScroll} ref={wheelRef} style={styles.wheel}>
        {cards}
      </div>
    </div>
  );
};

const styles = {
  wheel: {
    transform: "translate(0, -50%)",
    height: "500px",
    width: "500px",
    backgroundColor: "red",
    borderRadius: "50%",
    margin: "50rem 0 0 0",
  },
};

export default Wheel;
