import React from "react";
import MainSlider from "../../components/MainSlider";
import { mainSliderImages, mainSliderThumbs } from "./helper";
import "./mainBanner.scss";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <MainSlider images={mainSliderImages} thumbs={mainSliderThumbs} />
    </div>
  );
};

export default MainBanner;
