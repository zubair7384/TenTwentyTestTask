import React, { useState, useEffect, useRef } from "react";
import Card from "./Card.jsx";

const Wheel = () => {
  const [radius, setRadius] = useState(150);
  const [cards, setCards] = useState([]);
  const [theta, setTheta] = useState(0.0);
  const [tempTheta, setTempTheta] = useState(0.0);
  const wheelRef = useRef(null);
  const animId = useRef(null);

  useEffect(() => {
    let center_of_wheel = {
      x: parseFloat(wheelRef.current.style.width) / 2,
      y: parseFloat(wheelRef.current.style.height) / 2,
    };
    let temp_cards = [];

    for (let i = 0; i < 8; i++) {
      temp_cards.push(
        <Card
          radius={radius}
          radian_interval={(Math.PI / 4) * i}
          center={center_of_wheel}
          key={`card_${i}`}
        />
      );
    }

    setCards(temp_cards);
  }, [radius]);

  const handle_scroll = (event) => {
    clearTimeout(animId.current);
    wheelRef.current.style.transform = `translate(-50%, -50%) rotate(${
      tempTheta + event.deltaY * 0.5
    }deg)`;
    setTempTheta(tempTheta + event.deltaY * 0.5);

    animId.current = setTimeout(() => {
      setTheta(tempTheta);
    }, 150);
  };

  return (
    <div onWheel={handle_scroll} ref={wheelRef} style={styles.wheel}>
      {cards}
    </div>
  );
};

const styles = {
  wheel: {
    margin: "0",
    padding: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100px",
    width: "100px",
    backgroundColor: "red",
    borderRadius: "50px",
  },
};

export default Wheel;
