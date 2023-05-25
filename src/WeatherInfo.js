import React from "react";
import FormattedDate from "./FormattedDate.js";
import Icons from "./Icons.js";


export default function WeatherInfo(props) {
    return (<div className="WeatherInfo">

         <div className="row">
          <div className="col-sm-7 currentWeather">
            <p id="city">{props.data.city}</p>
          </div>

          <div className="col-sm-2 currentWeather">
            <span id="cityTemp">{Math.round(props.data.temperature)}</span>°
          </div>
          <div className="col-sm-1 currentWeather emoji-container">
         <img src={props.data.icon} alt={props.data.description} />
          </div>
        </div>

        <ul>
          <li className="littleTitle col-sm-5"> 
            Last updated:{" "}
            <span id="time">
              {" "}
              <strong> <FormattedDate date={props.data.date} /> </strong>
            </span>
          </li>
          <li className="littleTitle">
            Humitity:{" "}
            <span id="humidity">
              <strong>{Math.round(props.data.humidity)}</strong>
            </span>
            %, Wind:{" "}
            <span id="wind">
              {" "}
              <strong> {Math.round(props.data.wind)}</strong>
            </span>{" "}
            km/h
          </li>
          <li className="littleTitle text-capitalize" id="description">
            {" "}
            <strong>{props.data.description}</strong>
          </li>
        </ul>

        <button className="btn btn-primary">Current Location</button>
    </div>)
}