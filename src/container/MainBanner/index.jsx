import React from "react";
import MainSlider from "../../components/MainSlider";

import MainSliderOne from "../../assets/images/main-slider-one.jpg";
import MainSliderTwo from "../../assets/images/main-slider-two.jpg";
import MainSliderThree from "../../assets/images/main-slider-three.jpg";
import MailSliderThumbOne from "../../assets/images/thumbTwo.jpg";
import MailSliderThumbTwo from "../../assets/images/thumbTwo.jpg";
import MailSliderThumbThree from "../../assets/images/thumbTwo.jpg";

import "./mainBanner.scss";

const mainSliderImages = [
  MainSliderOne,
  MainSliderTwo,
  MainSliderThree,
  MainSliderTwo,
];

const mainSliderThumbs = [
  MailSliderThumbOne,
  MailSliderThumbOne,
  MailSliderThumbOne,
  MailSliderThumbOne,
  MailSliderThumbOne,
];

const MainBanner = () => {
  return (
    <div className="main-banner">
      <MainSlider
        timeInterval={10000}
        images={mainSliderImages}
        thumbs={mainSliderThumbs}
      />
    </div>
  );
};

export default MainBanner;
