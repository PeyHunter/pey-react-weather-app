import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="col-sm-7">
          <p id="city">Copenhagen</p>
        </div>

        <div className="col-sm-3 currentWeather">
          <span id="cityTemp">19</span>°
        </div>
        <div className="col-sm-1 currentWeather">🌧️</div>
      </div>

      <ul>
        <li className="littleTitle">
          Last updated: <span id="time">date and time</span>
        </li>
        <li className="littleTitle">
          Humitity: <span id="humidity">0,0</span>%, Wind:
          <span id="wind">0,0</span> km/h
        </li>
        <li className="littleTitle" id="description">
          Description
        </li>
      </ul>

      <button className="btn btn-primary">Current Location</button>
    </div>
  );
}
