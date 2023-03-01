import React from "react";
import MainBanner from "../../container/MainBanner";
import QualityProducts from "../../container/QualityProducts";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <MainBanner />
      <QualityProducts />
    </div>
  );
};

export default Home;
