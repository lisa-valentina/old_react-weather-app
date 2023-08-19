import React from "react";
import Search from "./Search";

import "./styles.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <Search />
    </div>
  );
}
