import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">mon</p>
        <p className="forecastEmojies">🌧️</p>
        <p className="temp">
          15° | <span className="nighttime "> 12°</span>
        </p>
        <p className="note">Rainy all day</p>
      </div>
      <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">tue</p>
        <p className="forecastEmojies">🌤</p>
        <p className="temp">
          16° | <span className="nighttime"> 13°</span>
        </p>
        <p className="note">Cloudy and a little sun</p>
      </div>
      <div className="col daysInWeek forcastSeperator">
        <p className="weekdays">wen</p>
        <p className="forecastEmojies">🌦</p>
        <p className="temp">
          18° | <span className="nighttime"> 15°</span>
        </p>
        <p className="note">Sun and rain all day</p>
      </div>
      <div className="col daysInWeek">
        <p className="weekdays">thu</p>
        <p className="forecastEmojies">☀</p>
        <p className="temp">
          20° | <span className="nighttime"> 18°</span>
        </p>
        <p className="note">Sunny all day</p>
      </div>
    </div>
  );
}
