import React, { useState } from "react";
import MainSlider from "./components/MainSlider";
import CardSlider from "./components/CardsSlider";
import "./styles/global.scss";

const App = () => {
  const images = [
    "https://picsum.photos/id/1/800/400",
    "https://picsum.photos/id/2/800/400",
    "https://picsum.photos/id/3/800/400",
    "https://picsum.photos/id/4/800/400",
  ];

  const thumbs = [
    "https://picsum.photos/id/1/800/400",
    "https://picsum.photos/id/2/800/400",
    "https://picsum.photos/id/3/800/400",
    "https://picsum.photos/id/4/800/400",
  ];

  return (
    <div>
      <h1>Hello World</h1>
      <MainSlider images={images} thumbs={thumbs} />
      {/* <CardSlider images={imagesTwo} /> */}
    </div>
  );
};

export default App;
