import axios from "axios";
import React, {useState} from "react";
import "./styles.css";
import "./Weather.css"


 

export default function Search() {


  return (

     <div className="container">
    <div className="Search" >
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
        <div className="col-sm-7">
          <p id="city">Copenhagen</p>
        </div>

        <div className="col-sm-3 currentWeather">
          <span id="cityTemp">19</span>°
        </div>
        <div className="col-sm-1 d-flex currentWeather emoji-container align-items-center justify-content-sm-start ">🌧️</div>
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
