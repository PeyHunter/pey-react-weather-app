import axios from "axios";
import React, {useState} from "react";
import "./styles.css";
import "./Weather.css"


 

export default function Weather(props) {


  
   const [weatherData, setWeatherData] = useState({ ready: false});

  
  function handleResponse (response){
setWeatherData ({
  ready: true,
  temperature: response.data.temperature.current,
  wind: response.data.wind.speed,
  humidity: response.data.temperature.humidity,
  description: response.data.condition.description,
  icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
  city: response.data.city,
  date: "Tuesday 14.00",
})


  }
  

if (weatherData.ready) {
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
          <p id="city">{weatherData.city}</p>
        </div>

        <div className="col-sm-3 currentWeather">
          <span id="cityTemp">{Math.round(weatherData.temperature)}</span>°
        </div>
        <div className="col-sm-1 currentWeather emoji-container  "><img src={weatherData.icon} alt="weather-icon"></img></div>
      </div>

      <ul>
        <li className="littleTitle">
          Last updated: <span id="time"> <strong> {weatherData.date} </strong></span>
        </li>
        <li className="littleTitle">
          Humitity: <span id="humidity"><strong>{Math.round(weatherData.humidity)}</strong></span>%, Wind:
          <span id="wind">{" "} <strong> {Math.round(weatherData.wind)}</strong></span> km/h
        </li>
        <li className="littleTitle text-capitalize" id="description"> <strong>
          {weatherData.description}</strong>
        </li>
      </ul>

      <button className="btn btn-primary">Current Location</button>
    </div>
  );
} else {
     let apiKey = "f9do3fd4558cd9a56ebf7d2bbtab042b"
  let units = "metric"
  let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&${units}`
axios.get(url).then(handleResponse);
return "loading"
  }

}
