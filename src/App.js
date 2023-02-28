// - @Author: zubir iqbal zubair.iqbal2018@gmail.com
// - @Date: 2023-02-28 03:57 PM
// - @LastEditors: zubir zubair.iqbal2018@gmail.com
// - Copyright (c) 2022 by zubir zubair.iqbal2018@gmail.com, All Rights Reserved.

import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles/global.scss";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Home />
    </div>
  );
};

export default App;
