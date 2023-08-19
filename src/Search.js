import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [info, setInfo] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [iconCode, setIconCode] = useState(null);

  function showResults(response) {
    setInfo(true);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(response.data.wind.speed);
    setIconCode(response.data.weather[0].icon);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let unit = "metric";
    let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(showResults);
  }

  if (info) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city..."
            onChange={searchCity}
          />
          <input type="submit" value="submit" />
        </form>
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${iconCode}.png`}
              alt="icon for weather description"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city..."
            onChange={searchCity}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
