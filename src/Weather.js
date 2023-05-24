import axios from "axios";
import React, { useState, useEffect } from "react";
import "./styles.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";
import ContentLoader from "react-content-loader";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    let apiKey = "f9do3fd4558cd9a56ebf7d2bbtab042b";
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&${units}`;

    axios.get(url).then(handleResponse);
  }, [props.defaultCity]);

  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
      city: response.data.city,
      date: new Date (response.data.time * 1000)
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Search">
          <form className="row g-2" id="search-form">
            <div className="col-sm-10">
              <input
                placeholder="Search for your city..."
                type="text"
                className="form-control"
                id="city-input"
              />
            </div>
            <div className="col-sm-2  text-sm-start">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>

        <br />
        <br />
        <div className="row">
          <div className="col-sm-7 currentWeather">
            <p id="city">{weatherData.city}</p>
          </div>

          <div className="col-sm-2 currentWeather">
            <span id="cityTemp">{Math.round(weatherData.temperature)}</span>°
          </div>
          <div className="col-sm-1 currentWeather emoji-container">
            <img src={weatherData.icon} alt="weather-icon" />
          </div>
        </div>

        <ul>
          <li className="littleTitle col-sm-5">
            Last updated:{" "}
            <span id="time">
              {" "}
              <strong> <FormattedDate date={weatherData.date} /> </strong>
            </span>
          </li>
          <li className="littleTitle">
            Humitity:{" "}
            <span id="humidity">
              <strong>{Math.round(weatherData.humidity)}</strong>
            </span>
            %, Wind:{" "}
            <span id="wind">
              {" "}
              <strong> {Math.round(weatherData.wind)}</strong>
            </span>{" "}
            km/h
          </li>
          <li className="littleTitle text-capitalize" id="description">
            {" "}
            <strong>{weatherData.description}</strong>
          </li>
        </ul>

        <button className="btn btn-primary">Current Location</button>
      </div>
    );
  } else {
    return (
      <div>
        <ContentLoader viewBox="0 0 380 70" backgroundColor="#f3f3f3">
          <rect x="0" y="0" rx="0" ry="0" width="800" height="20" />
        </ContentLoader>
      </div>
    );
  }
}
