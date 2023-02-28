// - @Author: zubir iqbal zubair.iqbal2018@gmail.com
// - @Date: 2023-02-28 03:57 PM
// - @LastEditors: zubir zubair.iqbal2018@gmail.com
// - Copyright (c) 2022 by zubir zubair.iqbal2018@gmail.com, All Rights Reserved.

import React, { useState } from "react";
import MainSlider from "./components/MainSlider";
import Header from "./components/Header";
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
    "https://picsum.photos/id/5/800/400",
  ];

  return (
    <div className="app-container">
      <Header />
      <MainSlider images={images} thumbs={thumbs} />
      {/* <CardSlider images={imagesTwo} /> */}
    </div>
  );
};

export default App;
