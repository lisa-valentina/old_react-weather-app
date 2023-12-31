import React from "react";
import ReactDOM from "react-dom/client";

import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherApp />
    <Footer />
  </React.StrictMode>
);
